import { Lightbulb,  Volume2Icon } from "lucide-react";
import React from "react";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeach = (question) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(question);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser doesn't support text to speech.");
    }
  };
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => (
              <h2
                key={index}
                className={`p-2 rounded-full font-bold text-xs sm:text-sm text-center cursor-pointer ${
                  activeQuestionIndex === index
                    ? "bg-blue-400 text-white"
                    : "bg-secondary"
                }`}
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-sm md:text-lg">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2Icon
          className="cursor-pointer"
          onClick={() =>
            textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />

        <div className="border rounded-lg p-5 bg-blue-50 mt-20">
          <h2 className="flex gap-5 items-center text-blue-700">
            <Lightbulb />
            <strong>NOTE: </strong>
          </h2>
          <h2 className="mt-2 text-sm text-blue-600">
            {process.env.NEXT_PUBLIC_NOTE_INFORMATION}
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;
