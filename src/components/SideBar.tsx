"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  FaBox,
  FaUsers,
  FaClipboardList,
  FaTasks,
  FaBars,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex fixed ">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-blue-900 h-screen p-5 pt-8 relative duration-300`}
      >
        {/* Toggle Button */}
        <FaBars
          className={`text-white absolute cursor-pointer -right-3 top-9 w-7 border-blue-900
          border-2 rounded-full ${!isOpen && "rotate-180"}`}
          onClick={toggleSidebar}
        />

        {/* Logo or Brand Name */}
        <div className="flex items-center gap-x-4">
          <div
            className={`${
              isOpen ? "text-xl font-medium text-white" : "hidden"
            } origin-left duration-200 cursor-pointer`}
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="pt-6">
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2  ${
              pathname.includes("products") ? "bg-blue-700" : ""
            } hover:bg-blue-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
            onClick={() => router.push("/dashboard/products")}
          >
            <FaBox size={20} />
            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
              Products
            </span>
          </li>

          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }  ${pathname.includes("users") ? "bg-blue-700" : ""}`}
            onClick={() => router.push("/dashboard/users")}
          >
            <FaUsers size={20} />
            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
              Users
            </span>
          </li>

          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            } ${pathname.includes("posts") ? "bg-blue-700" : ""}`}
            onClick={() => router.push("/dashboard/posts")}
          >
            <FaClipboardList size={20} />
            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
              Posts
            </span>
          </li>

          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            } ${pathname.includes("todos") ? "bg-blue-700" : ""}`}
            onClick={() => router.push("/dashboard/todos")}
          >
            <FaTasks size={20} />
            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
              Todos
            </span>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            } ${pathname.includes("me") ? "bg-blue-700" : ""}`}
            onClick={() => router.push("/dashboard/me")}
          >
            <FaUser size={20} />
            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
              Me
            </span>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
