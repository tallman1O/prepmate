"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";

const RecordAnswerSection = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  return (
    <div>
      <div className="flex flex-col my-20 items-center justify-center bg-black/60 rounded-lg">
        <Image
          src="/logo/webcam.svg"
          width={200}
          height={200}
          alt="webcam"
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: "100%",
            width: "100%",
            zIndex: 10,
            borderRadius: 10,
            rounded: "lg",
          }}
        />
      </div>
      <div className="w-full flex justify-center">
        <Button
          className="bg-blue-400 hover:bg-blue-800"
          onClick={isRecording ? stopSpeechToText : startSpeechToText}
        >
          {isRecording ? (
            <h2 className="text-red-600 flex items-center gap-2 p-2">
              <Mic /> Recording...
            </h2>
          ) : (
            "Record Answer"
          )}
        </Button>
      </div>
      <Button onClick={() => console.log(userAnswer)}>Show Answer</Button>
    </div>
  );
};

export default RecordAnswerSection;
