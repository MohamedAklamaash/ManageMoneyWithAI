"use server";

import aj from "@/lib/arcjet";
import { db } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj) => {
  const serialized = { ...obj };
  if (obj.balance) {
    serialized.balance = obj.balance.toNumber();
  }
  if (obj.amount) {
    serialized.amount = obj.amount.toNumber();
  }
  return serialized;
};

export async function getUserAccounts() {
  const clerk = await currentUser();
  if (!clerk) {
    throw new Error("Unauthorized")
  }
  const user = await db.user.findUnique({
    where: { email: clerk.emailAddresses[0]?.emailAddress },
  });


  if (!user) {
    throw new Error("User not found");
  }

  try {
    const accounts = await db.account.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: {
            transactions: true,
          },
        },
      },
    });

    // Serialize accounts before sending to client
    const serializedAccounts = accounts.map(serializeTransaction);

    return serializedAccounts;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createAccount(data) {
  try {
    const clerk = await currentUser();
    if (!clerk) {
      throw new Error("Unauthorized")
    }
    const decision = await aj.protect({
      userId: clerk.id,
      requested: 1,
    });

    if (decision.isDenied()) {
      const { remaining, reset } = decision.reason;
      console.error("Rate limit exceeded", { remaining, reset });
      throw new Error("Too many requests. Please try again later.");
    }



    const user = await db.user.findUnique({
      where: { email: clerk.emailAddresses[0]?.emailAddress },
    });

    const balanceFloat = parseFloat(data.balance);
    if (isNaN(balanceFloat)) {
      throw new Error("Invalid balance amount");
    }

    const existingAccounts = await db.account.findMany({
      where: { userId: user.id },
    });

    const shouldBeDefault = existingAccounts.length === 0 ? true : data.isDefault;

    if (shouldBeDefault) {
      await db.account.updateMany({
        where: { userId: user.id, isDefault: true },
        data: { isDefault: false },
      });
    }

    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceFloat,
        userId: user.id,
        isDefault: shouldBeDefault,
      },
    });

    return { success: true, data: serializeTransaction(account) };
  } catch (error) {
    throw new Error(error.message);
  }
}


export async function getDashboardData() {
  const clerk = await currentUser();
  if (!clerk) {
    throw new Error("Unauthorized")
  }
  const user = await db.user.findUnique({
    where: { email: clerk.emailAddresses[0]?.emailAddress },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // Get all user transactions
  const transactions = await db.transaction.findMany({
    where: { userId: user.id },
    orderBy: { date: "desc" },
  });

  return transactions.map(serializeTransaction);
}
