"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const CTA = () => {
  const router = useRouter();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            Start practicing with Prepmate : Our AI interviewer today and take the first
            step towards your dream job.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => router.push("/dashboard")}
            >
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
