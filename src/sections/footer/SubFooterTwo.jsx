import React from "react";
import Insta from "./logo/Insta";
import Twitter from "./logo/Twitter";
import Github from "./logo/Github";
import Ball from "./logo/Ball";
import FacebookLogo from "./logo/FacebookLogo";

const SubFooterTwo = () => {
  return (
    <>
      <div className="text-center">
        <a
          href="#"
          className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="./assets/logo.svg"
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
              <FacebookLogo/>
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
