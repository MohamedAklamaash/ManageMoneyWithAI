import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Zap,
} from "lucide-react";
import laxmanpic from "@/public/laxman.jpg"
import paramapic from "@/public/parama.jpg"
import arunpic from "@/public/arun.jpg"
// Stats Data
export const statsData = [
  {
    value: "10+",
    label: "Active Users",
  },
  {
    value: "$10000+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Advanced Analytics",
    description:
      "Gain in-depth insights into your financial behavior through AI-powered analytics",
  },
  {
    icon: <Receipt className="h-10 w-10" />,
    title: "Intelligent Receipt Scanner",
    description:
      "Effortlessly extract data from receipts with cutting-edge AI technology",
  },
  {
    icon: <PieChart className="h-10 w-10" />,
    title: "Smart Budget Planning",
    description: "Build and manage budgets with precision, guided by intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Multi-Account Integration",
    description: "Easily manage multiple accounts and credit cards from a single platform",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Automated Financial Insights",
    description: "Receive insightful, automated financial recommendations for optimal management",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-12 w-12" />,
    title: "1. Set Up Your Account",
    description:
      "Begin your journey in minutes with our simple, secure, and efficient sign-up process",
  },
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: "2. Track Your Expenditures",
    description:
      "Automatically categorize and track your transactions in real-time with minimal effort",
  },
  {
    icon: <PieChart className="h-12 w-12" />,
    title: "3. Receive Insights Every Month",
    description:
      "Unlock AI-powered insights and actionable recommendations to optimize your financial decisions",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Laxman",
    role: "Data Analyst",
    image: laxmanpic,
    quote:
      "ManageMoney has revolutionized how I manage my business finances. The AI-powered insights have uncovered cost-saving opportunities that I never imagined.",
  },
  {
    name: "ParamaGuru",
    role: "Freelancer & AI Enthusiast",
    image: paramapic,
    quote:
      "The receipt scanning feature has saved me countless hours each month. It has simplified my financial tracking, allowing me to focus more on my work and less on manual tasks.",
  },
  {
    name: "Arun Prakash",
    role: "Data Scientist",
    image: arunpic,
    quote:
      "I wholeheartedly recommend ManageMoneyWithAI to all my clients. Its multi-currency support and comprehensive analytics are perfect for both local and international investors.",
  },
];
