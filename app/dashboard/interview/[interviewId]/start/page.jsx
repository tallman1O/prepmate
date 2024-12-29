"use client";
import { db } from "@/lib/db";
import { prepmate } from "@/lib/schema";
import { eq } from "drizzle-orm";
import React, { use, useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";

const StartInterview = ({ params }) => {
  const unwrappedParams = use(params);
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(prepmate)
      .where(eq(prepmate.mockId, unwrappedParams.interviewId));

    const jsonMockResponse = JSON.parse(result[0].jsonRes);
    console.log(jsonMockResponse);
    setMockInterviewQuestion(jsonMockResponse);
    setInterviewData(result[0]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Questions*/}
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />

        {/*Video Audio Recording*/}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
    </div>
  );
};

export default StartInterview;
