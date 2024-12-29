import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();

  const onStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  }
  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-blue-400">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-700">
        {interview?.jobExperience} Years of Experience
      </h2>
      <h2 className="text-xs text-gray-500">
        Created At: {interview?.createdAt}
      </h2>

      <div className="flex justify-between gap-2 mt-5">
        <Button
          size="sm"
          variant="outline"
          className="w-full font-bold"
          onClick={() =>
            router.push(`/dashboard/interview/${interview.mockId}/feedback`)
          }
        >
          Feedback
        </Button>

        <Button
          size="sm"
          className="w-full bg-blue-700 hover:bg-blue-500 font-bold"
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
