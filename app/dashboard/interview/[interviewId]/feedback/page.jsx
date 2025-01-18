"use client";
import { db } from "@/lib/db";
import { answerByUser } from "@/lib/schema";
import { eq } from "drizzle-orm";
import React, { use, useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDownIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Feedback = ({ params }) => {
  const router = useRouter();
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    getFeedback();
  }, []);

  const unwrappedParams = use(params);

  const getFeedback = async () => {
    const result = await db
      .select()
      .from(answerByUser)
      .where(eq(answerByUser.mockIdRef, unwrappedParams.interviewId))
      .orderBy(answerByUser.id);

    setFeedbackList(result);
  };

  return (
    <div className="p-12 text-white">
      {feedbackList.length === 0 ? (
        <h2 className="text-4xl font-extrabold text-red-500 text-center mt-40">
          404 No Interview Feedback Record Found!
        </h2>
      ) : (
        <>
          <h2 className="text-4xl font-extrabold text-green-600 mb-4">
            Congratulations!
          </h2>
          <h2 className="text-2xl text-black font-semibold mb-4">
            Below are your Interview Feedback:
          </h2>
          <h2 className="text-sm text-gray-400 mb-10">
            Find below Interview Questions with Correct Answer, Your Answer, and
            Feedback for Improvement:
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-10">
                <CollapsibleTrigger className="flex justify-between items-center gap-6 p-4 bg-indigo-500 text-white rounded-xl shadow-lg hover:bg-red-800 transition-all">
                  <span className="flex-1">{item.question}</span>
                  <ChevronsUpDownIcon className="text-white text-xl" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 rounded-lg shadow-xl">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-xl font-bold text-red-400 bg-red-50 p-4 rounded-lg border-4 border-red-500">
                      <strong>Rating:</strong> {item.rating}
                    </h2>
                    <h2 className="text-lg p-4 text-blue-500 bg-blue-50 border-4 border-blue-500 rounded-lg">
                      <strong>Your Answer:</strong> {item.userAns}
                    </h2>
                    <h2 className="text-lg p-4 text-yellow-500 bg-yellow-50 border-4 border-yellow-500 rounded-lg">
                      <strong>Feedback Based on Your Answer:</strong>{" "}
                      {item.feedback}
                    </h2>
                    <h2 className="text-lg p-4 text-green-500 bg-green-50 border-4 border-green-500 rounded-lg">
                      <strong>Recommended Answer Example:</strong>{" "}
                      {item.correctAns}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <div className="mt-12 flex justify-center">
        <Button
          onClick={() => router.replace("/dashboard")}
          className="bg-blue-700 hover:bg-blue-500 p-4 rounded-lg text-white font-bold shadow-xl"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
