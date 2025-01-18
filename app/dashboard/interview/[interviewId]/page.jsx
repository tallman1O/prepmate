"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { prepmate } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, LoaderPinwheelIcon, WebcamIcon } from "lucide-react";
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
    <div className="my-10 flex justify-center flex-col items-center gap-8">
      <h2 className="font-bold text-3xl text-black">Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 rounded-lg border-4 border-black p-6">
            {interviewDetails ? (
              <>
                <h2 className="text-lg text-black">
                  <strong>Job Role/Position:</strong>{" "}
                  {interviewDetails.jobPosition}
                </h2>
                <h2 className="text-lg text-black">
                  <strong>Job Description:</strong>{" "}
                  {interviewDetails.jobDescription}
                </h2>
                <h2 className="text-lg text-black">
                  <strong>Years of Experience:</strong>{" "}
                  {interviewDetails.jobExperience}
                </h2>
              </>
            ) : (
              <LoaderPinwheelIcon className="p-5 animate-spin text-black" />
            )}
          </div>
          <div className="p-6 border-4 border-yellow-500 bg-yellow-100 rounded-lg">
            <h2 className="flex gap-2 items-center text-yellow-800 text-xl font-bold">
              <Lightbulb />
              Information
            </h2>
            <h2 className="text-sm font-medium mt-4 text-yellow-800">
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
                className="w-full border-4 border-black text-black bg-transparent hover:bg-gray-200"
              >
                Disable Web Cam and Microphone
              </Button>
            </>
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 p-10 border-4 border-black bg-gray-300 rounded-lg" />
              <Button
                onClick={() => setWebCamEnabled(true)}
                className="w-full border-4 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-100"
                variant="ghost"
              >
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end items-end w-full mt-10">
        <Link
          href={
            "/dashboard/interview/" + unwrappedParams.interviewId + "/start"
          }
        >
          <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white border-4 border-black">
            Start Interview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
