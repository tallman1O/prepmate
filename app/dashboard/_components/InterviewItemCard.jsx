import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();

  const onStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  };

  return (
    <div className=" p-6 rounded-lg border-4 border-black shadow-lg flex flex-col gap-4">
      <h2 className="font-bold text-blue-500 text-2xl">{interview?.jobPosition}</h2>
      <h3 className="text-sm font-semibold text-gray-600">{interview?.jobExperience} Years of Experience</h3>
      <h4 className="text-xs text-gray-400">Created At: {interview?.createdAt}</h4>

      <div className="flex justify-between gap-4 mt-5">
        <Button
          size="sm"
          variant="outline"
          className="w-full border-2 border-black text-black font-bold bg-transparent hover:bg-gray-200"
          onClick={() =>
            router.push(`/dashboard/interview/${interview.mockId}/feedback`)
          }
        >
          Feedback
        </Button>

        <Button
          size="sm"
          className="w-full bg-blue-700 hover:bg-blue-600 font-bold border-2 border-black text-white"
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;