import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "$2B+",
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
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Gain in-depth insights into your financial behavior through AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Intelligent Receipt Scanner",
    description:
      "Effortlessly extract data from receipts with cutting-edge AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Smart Budget Planning",
    description: "Build and manage budgets with precision, guided by intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Integration",
    description: "Easily manage multiple accounts and credit cards from a single platform",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency Support",
    description: "Seamlessly handle multiple currencies with real-time exchange rates",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Financial Insights",
    description: "Receive insightful, automated financial recommendations for optimal management",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Set Up Your Account",
    description:
      "Begin your journey in minutes with our simple, secure, and efficient sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Expenditures",
    description:
      "Automatically categorize and track your transactions in real-time with minimal effort",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Receive Insights",
    description:
      "Unlock AI-powered insights and actionable recommendations to optimize your financial decisions",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Aarav Patel",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    quote:
      "Welth has revolutionized how I manage my business finances. The AI-powered insights have uncovered cost-saving opportunities that I never imagined.",
  },
  {
    name: "Priya Sharma",
    role: "Freelancer & Consultant",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    quote:
      "The receipt scanning feature has saved me countless hours each month. It has simplified my financial tracking, allowing me to focus more on my work and less on manual tasks.",
  },
  {
    name: "Ravi Kumar",
    role: "Certified Financial Planner",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    quote:
      "I wholeheartedly recommend Welth to all my clients. Its multi-currency support and comprehensive analytics are perfect for both local and international investors.",
  },
];
