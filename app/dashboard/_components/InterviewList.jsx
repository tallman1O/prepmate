"use client";
import { db } from "@/lib/db";
import { prepmate } from "@/lib/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";

const InterviewList = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);
  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(prepmate)
      .where(eq(prepmate.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(prepmate.id));

    console.log(result);
    setInterviewList(result);
  };
  return (
    <div>
      <h2 className="font-bold text-xl">Previous Mock Interview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4">
        {interviewList && interviewList.map((interview, index)=>(
            <InterviewItemCard key={index} interview={interview} />
        ))}
      </div>
    </div>
  );
};

export default InterviewList;
