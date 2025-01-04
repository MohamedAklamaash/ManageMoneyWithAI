import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// ArcJet middleware setup
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", // Block bots in live mode
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Allow search engine bots
        "GO_HTTP", // Allow specific bot for Inngest
      ],
    }),
  ],
});

// Clerk middleware for authentication
const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Handle protected routes
  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect("/sign-in"); // Redirect unauthenticated users
  }

  // Check if the user is new and handle accordingly
  if (userId) {
    const userExists = await checkUserInDatabase(userId); // Custom function to check DB
    if (!userExists) {
      return NextResponse.redirect("/welcome"); // Redirect new users to a welcome page
    }
  }

  return NextResponse.next();
});

// Custom function to check if the user exists in the database
async function checkUserInDatabase(userId) {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/users/${userId}`);
    if (response.ok) {
      const user = await response.json();
      return Boolean(user); // Return true if user exists
    }
    return false;
  } catch (error) {
    console.error("Error checking user in database:", error);
    return false;
  }
}

// Combine ArcJet and Clerk middlewares
export default createMiddleware(aj, clerk);

// Middleware configuration
export const config = {
  matcher: [
    // Exclude static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
