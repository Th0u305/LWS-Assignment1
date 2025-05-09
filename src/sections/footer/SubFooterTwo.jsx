import React from "react";
import Insta from "./logo/Insta";
import Twitter from "./logo/Twitter";
import Github from "./logo/Github";
import Ball from "./logo/Ball";

const SubFooterTwo = () => {
  return (
    <>
      <div className="text-center">
        <a
          href="#"
          className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="./src/assets/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Learn with Sumit Logo"
          />
          Learn with Sumit{" "}
        </a>
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
          <a
            href="#"
            target="_blank"
            className="text-purple-600 hover:underline dark:text-purple-500"
          >
            Flowbite
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-purple-600 hover:underline dark:text-purple-500"
          >
            Tailwind CSS
          </a>
          .
        </span>
        <ul className="flex justify-center mt-5 space-x-5">
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Insta />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Twitter />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Ball />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SubFooterTwo;
