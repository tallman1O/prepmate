import React from "react";
import Header from "./_components/Header";

const Dashboardlayout = ({ children }) => {
  return (
    <div className="bg-[#f4f1de] min-h-screen">
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36">{children}</div>
    </div>
  );
};
export default Dashboardlayout;
