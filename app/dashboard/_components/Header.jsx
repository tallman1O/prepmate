"use client";
import { UserButton } from "@clerk/nextjs";
import { Bot } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";


const Header = () => {
  const path = usePathname();

  return (
    <div className="flex p-4 items-center justify-between bg-[#f4f1de] relative border-b-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
    
      {/* Logo with Brutalist Styling */}
      <div className="relative inline-flex items-center justify-center p-4 border-4 border-black bg-indigo-300 rounded-lg shadow-[6px_6px_0px_#000]">
        <Bot className="h-6 w-6 text-black" />
      </div>

      {/* Navigation Links
      <ul className="hidden md:flex gap-6 font-semibold text-gray-700 text-lg">
        {["dashboard", "questions", "upgrade", "working"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer transition-all duration-300 border-4 border-transparent px-4 py-2 rounded-lg 
              ${
                path === `/dashboard/${item}` || (item === "dashboard" && path === "/dashboard")
                  ? "text-blue-600 border-black bg-yellow-300 shadow-[4px_4px_0px_#000]"
                  : "hover:text-blue-500 hover:border-black"
              }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul> */}

      {/* User Profile Button */}
      <UserButton />
    </div>
  );
};

export default Header;