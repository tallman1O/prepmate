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

    console.log(result);
    setFeedbackList(result);
  };
  return (
    <div className="p-10">
      {feedbackList.length == 0 ? (
        <h2 className="text-3xl flex justify-center mt-44 font-bold text-red-600">
          404 No Interview Feedback Record Found!
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-600">
            Congratulations!
          </h2>
          <h2 className="font-semibold text-2xl mt-1">
            Following are your Interview Feedback :
          </h2>
          <h2 className="text-lg my-4">
            Your Overall Interview Rating: <strong>7/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find Below Interview Questions with Correct Answer, Your Answer and
            Feedback for Improvement:{" "}
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="flex gap-5 justify-between p-2 bg-secondary rounded-lg my-2 text-left">
                  {item.question} <ChevronsUpDownIcon className="size-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: </strong>
                      {item.rating}
                    </h2>
                    <h2 className="p-2 border rounded-lg">
                      <strong>Your Answer: </strong>
                      {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg">
                      <strong>Feedback Based on Your Answer: </strong>
                      {item.feedback}
                    </h2>
                    <h2 className="p-2 border rounded-lg">
                      <strong>Recommended Answer Example: </strong>
                      {item.correctAns}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <div className="my-10">
        <Button
          onClick={() => router.replace("/dashboard")}
          className="bg-blue-700 hover:bg-blue-500"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
