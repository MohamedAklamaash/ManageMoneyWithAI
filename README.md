# ManageMoneyWithAI

ManageMoneyWithAI is an AI-driven personal finance management application designed to help users effectively track expenses, manage budgets, and make informed financial decisions. Leveraging advanced machine learning algorithms, the app provides personalized insights to optimize spending habits and enhance financial literacy.

## Features

- **Expense Tracking**: Monitor and categorize expenditures to gain a clear understanding of spending patterns.

- **Budget Management**: Set and manage budgets to ensure financial goals are met.

- **AI-Powered Insights**: Receive personalized recommendations based on spending behavior to improve financial health.

- **Investment Opportunities**: Explore potential investment options tailored to individual financial profiles.

- **User-Friendly Interface**: Enjoy an intuitive and engaging design that simplifies financial management.

## Technologies Used

- **Tech Stack**: NextJs, Vite, Tailwind CSS

- **Database**: Postgresql

- **AI Integration**: Google Gemini API

## Getting Started

To set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MohamedAklamaash/ManageMoneyWithAI.git
   cd ManageMoneyWithAI
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```
        DATABASE_URL=
        DIRECT_URL=

        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
        CLERK_SECRET_KEY=
        NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
        NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

        GEMINI_API_KEY=

        RESEND_API_KEY=

        ARCJET_KEY=

   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.

2. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit them**:

   ```bash
   git commit -m 'Add new feature'
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature/your-feature-name
   ```