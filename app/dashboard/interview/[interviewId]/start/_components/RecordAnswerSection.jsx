"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { chatSession } from "@/lib/geminiModel";
import { db } from "@/lib/db";
import { answerByUser } from "@/lib/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { toast } from "sonner";

const RecordAnswerSection = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer?.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const SaveUserRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    setIsLoading(true);
    const feedbackPrompt =
      "Question:" +
      mockInterviewQuestion[activeQuestionIndex]?.question +
      ", User Answer:" +
      userAnswer +
      ", Depending on Question and the answer given by user for the given interview question, Please give a rating for answer and a feedback if any." +
      "Give Feedback In just 5-10 lines to improve it in JSON Format with rating field and feedback field.";

    const result = await chatSession.sendMessage(feedbackPrompt);

    const mockJsonResponse = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    console.log(mockJsonResponse);
    const jsonFeedbackResponse = await JSON.parse(mockJsonResponse);

    const response = await db.insert(answerByUser).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: jsonFeedbackResponse?.feedback,
      rating: jsonFeedbackResponse?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-YYYY"),
    });

    if (response) {
      toast("User Answer Recorded Successfully!");
      setUserAnswer("");
      setResults([]);
    }
    setIsLoading(false);
  };

  return (
    <div className="p-10 border-4 border-black rounded-2xl my-10 shadow-lg">
      <div
        className={`flex flex-col my-20 ${
          webCamEnabled ? " py-0 " : " py-20"
        } items-center justify-center bg-black/60 rounded-lg`}
      >
        {webCamEnabled ? (
          <Webcam
            onUserMedia={() => setWebCamEnabled(true)}
            onUserMediaError={() => setWebCamEnabled(false)}
            mirrored={true}
            style={{
              height: "100%",
              width: "100%",
              zIndex: 10,
              borderRadius: 10,
              rounded: "lg",
            }}
          />
        ) : (
          <Image
            src="/logo/webcam.svg"
            width={200}
            height={200}
            alt="webcam"
            className="relative"
          />
        )}
      </div>
      <div className="w-full flex justify-center gap-5">
        <Button
          disabled={isLoading}
          className="bg-blue-600 text-white hover:bg-blue-800 border-4 border-blue-700"
          onClick={SaveUserRecording}
        >
          {isRecording ? (
            <h2 className="text-red-600 flex items-center gap-2 p-2">
              <Mic /> Recording...
            </h2>
          ) : (
            <h2 className="flex items-center gap-2 p-2">
              <Mic /> Record Answer
            </h2>
          )}
        </Button>

        {webCamEnabled ? (
          <Button
            onClick={() => setWebCamEnabled(false)}
            className="bg-blue-600 text-white hover:bg-blue-800 border-4 border-blue-700"
          >
            Disable Web Cam and Microphone
          </Button>
        ) : (
          <Button
            onClick={() => setWebCamEnabled(true)}
            className="border-4 border-blue-600 text-blue-600 hover:bg-blue-100"
            variant="ghost"
          >
            Enable Web Cam and Microphone
          </Button>
        )}
      </div>
    </div>
  );
};

export default RecordAnswerSection;
