import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Github, Linkedin, Globe } from "lucide-react";

const Home = () => {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-gradient-flow bg-[length:200%_200%] -z-10" />
      <div className="relative z-10">
        <Hero />
        <Features />
        <CTA />
        <footer className="bg-white/80 backdrop-blur-sm py-8 mt-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Mehul Uttam</h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/tallman1O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/mehul-uttam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://mehul.is-a.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Globe className="h-6 w-6" />
                </a>
              </div>
              <p className="text-sm text-gray-500">© 2025 All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;