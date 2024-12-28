"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src="/logo/avatar.svg" width={40} height={40} alt="logo" />
      <ul className="hidden md:flex gap-6 font-semibold text-gray-500">
        <li
          className={` hover:text-blue-400 transition-all duration-300 cursor-pointer ${
            path === "/dashboard" ? "text-blue-400" : "text-primary"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:text-blue-400 transition-all duration-300 cursor-pointer ${
            path === "/dashboard/questions" ? "text-primary text-blue-400" : ""
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:text-blue-400 transition-all duration-300 cursor-pointer ${
            path === "/dashboard/upgrade" ? "text-primary text-blue-400" : ""
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:text-blue-400 transition-all duration-300 cursor-pointer ${
            path === "/dashboard/working" ? "text-primary text-blue-400" : ""
          }`}
        >
          How it Works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
