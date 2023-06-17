import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <aside
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-blue-300">
          <ul class="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                class="flex items-center p-2  rounded-lg  hover:bg-blue-400"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="ml-3">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/addgpu"
                class="flex items-center p-2  rounded-lg  hover:bg-blue-400"
              >
                <span class="ml-3">Add GPU</span>
              </Link>
            </li>

            <li>
              <Link
                to="/rentgpu"
                class="flex items-center p-2  rounded-lg  hover:bg-blue-400"
              >
                <span class="ml-3">Rent GPU</span>
              </Link>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center p-2  rounded-lg  hover:bg-blue-400"
              >
                <span class="ml-3">GPU Usage History</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2  rounded-lg  hover:bg-blue-400"
              >
                <span class="ml-3">My GPUs</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
