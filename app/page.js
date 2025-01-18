"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../components/section-wrapper";
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Mic2,
  Users,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ColourfulText from "../components/ui/colourful-text";

function App() {
  return (
    <div className="min-h-screen bg-[#f4f1de] text-gray-900">
      {/* Hero Section */}
      <header className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <div className="relative mb-8 inline-flex items-center justify-center p-4 border-4 border-black bg-indigo-300 rounded-lg shadow-[5px_5px_0px_#000]">
              <Bot className="h-16 w-16 text-black" />
              <motion.div
                className="absolute top-1 right-1"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="h-6 w-6 text-yellow-300" />
              </motion.div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold uppercase">
              <ColourfulText text="Prepmate" /> - Master Interviews with AI
            </h1>
            <p className="text-xl text-gray-700 mt-6 max-w-2xl mx-auto">
              AI-powered mock interviews with real-time feedback.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/dashboard"
                className="mt-6 inline-flex items-center px-8 py-4 bg-pink-500 text-white text-lg font-semibold border-4 border-black rounded-lg shadow-[5px_5px_0px_#000] hover:bg-pink-600"
              >
                Start Practicing Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <SectionWrapper className="py-16 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainCircuit className="h-12 w-12 text-black" />,
                title: "AI-Powered Feedback",
                desc: "Instant feedback on responses & communication style.",
              },
              {
                icon: <Mic2 className="h-12 w-12 text-black" />,
                title: "Voice Analysis",
                desc: "Analyze tone, pace, and clarity with AI.",
              },
              {
                icon: <Users className="h-12 w-12 text-black" />,
                title: "Industry-Specific",
                desc: "Tailored questions for your field.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 border-4 border-black rounded-lg bg-indigo-200 shadow-[5px_5px_0px_#000] hover:shadow-[7px_7px_0px_#000] transition-all"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Demo Section */}
      <SectionWrapper className="py-16 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold uppercase">See How It Works</h2>
              <ul className="space-y-4 mt-4">
                {[
                  "Choose from hundreds of interview scenarios",
                  "Practice with AI that adapts to your responses",
                  "Get detailed feedback and improvement suggestions",
                  "Track your progress over time",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 border-4 border-black p-2 rounded-md bg-blue-300 shadow-[4px_4px_0px_#000]"
                  >
                    <CheckCircle2 className="h-5 w-5 text-black" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative border-4 border-black rounded-lg shadow-[5px_5px_0px_#000]">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                alt="Person in interview"
                className="rounded-sm"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-16 bg-indigo-500 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold uppercase text-black">
            Ready to Ace Your Interview?
          </h2>
          <p className="text-xl text-black mt-4 max-w-2xl mx-auto">
            Join thousands of professionals improving with AI.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#"
              className="mt-6 inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-semibold text-lg border-4 border-black rounded-lg shadow-[5px_5px_0px_#000] hover:bg-yellow-500"
            >
              Get Started Free
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default App;
