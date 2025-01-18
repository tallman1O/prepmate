# PrepMate - AI Mock Interview Platform 🎯

PrepMate is an AI-powered platform that simulates real-world interview scenarios, helping users practice and improve their interviewing skills through personalized feedback and evaluations.

## 🏆 Hackathon Project

This project was developed as a submission for the **CSI RenAIssance Hackathon**. It showcases the integration of AI technology in revolutionizing interview preparation and skill development.

## 🌟 Features

- **AI-Generated Questions**: Customized interview questions based on job role, description, and experience level
- **Video/Audio Recording**: Record your responses with optional camera functionality
- **Smart Evaluation**: Comprehensive AI feedback on each answer
- **Detailed Feedback System**:
  - Original response analysis
  - Improvement suggestions
  - Recommended model answers
  - 5-star rating system
- **Personal Dashboard**: Track your progress and review previous interviews
- **Practice Mode**: Retake interviews to improve your performance

## 🛠️ Tech Stack

- **Frontend**: NextJS, TailwindCSS
- **Backend**: NextJS (API Routes)
- **Database**: Neon Database with Drizzle ORM
- **AI Integration**: Gemini AI
- **Authentication**: Clerk

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/prepmate.git
cd prepmate
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
GEMINI_API_KEY=
DATABASE_URL=
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Environment Variables

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk authentication public key
- `CLERK_SECRET_KEY`: Clerk authentication secret key
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: Clerk Sign In URL
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: Clerk Sign Up URL
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`: Clerk authentication fallback redirect URL after Sign In
- `NEXT_PUBLIC_GEMINI_API_KEY`: Google Gemini AI API key
- `NEXT_PUBLIC_DATABASE_URL`: Neon Database connection URL

## 💡 Usage

1. Sign up/Login to your account
2. Enter your target job role, description, and years of experience
3. Receive AI-generated interview questions
4. Record your answers (with optional video)
5. Get instant AI feedback and evaluation
6. Review your performance in the dashboard
7. Practice and improve!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👏 Acknowledgments

- Built with Google's Gemini AI
- Powered by NextJS and TailwindCSS
- Created during CSI RenAIssance Hackathon
