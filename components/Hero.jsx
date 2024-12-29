"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#faf9c7eb] to-[#deb3f0] min-h-50%">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="animate-fade-up text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Master Your Interview Skills with Prepmate.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Practice interviews with our AI interviewer. Get instant feedback,
            improve your responses, and boost your confidence for your next job
            interview.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] hover:opacity-90"
              onClick={() => router.push("/dashboard")}
            >
              Start Practicing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
