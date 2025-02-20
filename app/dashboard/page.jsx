import React from "react";
import AddInterview from "./_components/AddInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = ({}) => {
  return (
    <div className="bg-[#f4f1de] w-full p-10">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="text-gray-500">
        Create and Start your AI Powered Mock Interview.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddInterview />
      </div>
      <div>
        <InterviewList />
      </div>
    </div>
  );
};

export default Dashboard;
