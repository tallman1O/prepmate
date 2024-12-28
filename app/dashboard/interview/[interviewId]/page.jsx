"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { prepmate } from "@/lib/schema";
import { eq } from "drizzle-orm";
import {
  Lightbulb,
  Loader2,
  LoaderPinwheelIcon,
  WebcamIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { use } from "react"; // Import the `use` hook
import Webcam from "react-webcam";

const Interview = ({ params }) => {
  // Unwrap the params promise
  const unwrappedParams = use(params);
  const [interviewDetails, setInterviewDetails] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    console.log(unwrappedParams.interviewId);
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(prepmate)
      .where(eq(prepmate.mockId, unwrappedParams.interviewId));
    setInterviewDetails(result[0]);
  };

  return (
    <div className="my-10 flex justify-center flex-col items-center">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5">
          <div className="flex flex-col gap-5 rounded-lg border p-5">
            {interviewDetails ? (
              <>
                <h2 className="text-lg">
                  <strong>
                    Job Role/Position: {interviewDetails.jobPosition}
                  </strong>
                </h2>
                <h2 className="text-lg">
                  <strong>
                    Job Description: {interviewDetails.jobDescription}
                  </strong>
                </h2>
                <h2 className="text-lg">
                  <strong>
                    Years of Experience: {interviewDetails.jobExperience}
                  </strong>
                </h2>
              </>
            ) : (
              <LoaderPinwheelIcon className="p-5 animate-spin" />
            )}
          </div>
          <div className="p-5 border rounded-lg border-yellow-400 bg-yellow-50">
            <h2 className="flex gap-2 items-center text-yellow-800">
              <Lightbulb />
              <strong className="text-lg">Information</strong>
            </h2>
            <h2 className="text-sm font-medium mt-5 text-yellow-700">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div>
          {webCamEnabled ? (
            <>
              <Webcam
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                mirrored={true}
                style={{
                  height: 300,
                  width: 300,
                }}
              />
              <Button
                onClick={() => setWebCamEnabled(false)}
                className="w-full bg-blue-400"
              >
                Disable Web Cam and Microphone
              </Button>
            </>
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 p-10 bg-secondary rounded-ld border " />
              <Button
                onClick={() => setWebCamEnabled(true)}
                className="w-full border-2 border-blue-600"
                variant="ghost"
              >
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end items-end w-full">
        <Link href={"/dashboard/interview/" + unwrappedParams.interviewId + "/start"}>
          <Button className="bg-blue-400 mt-20">Start Interview</Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
