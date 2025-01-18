import { Lightbulb, Volume2Icon } from "lucide-react";
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
      <div className="p-10  border-4 border-black rounded-2xl my-10 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => (
              <h2
                key={index}
                className={`p-1 rounded-full font-bold text-xs sm:text-sm text-center cursor-pointer ${
                  activeQuestionIndex === index
                    ? "bg-blue-600 text-white border-4 border-black"
                    : "bg-gray-200 text-black border-4 border-gray-400"
                }`}
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-lg font-semibold text-black">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2Icon
          className="cursor-pointer text-black hover:text-blue-600"
          onClick={() =>
            textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />

        <div className="border-4 border-blue-500 bg-blue-50 rounded-lg p-5 mt-10 shadow-md">
          <h2 className="flex gap-2 items-center text-blue-800 font-bold">
            <Lightbulb />
            <strong>NOTE: </strong>
          </h2>
          <h2 className="mt-2 text-sm text-blue-700">
            {process.env.NEXT_PUBLIC_NOTE_INFORMATION}
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;
