import React from "react";

const FigmaLogo = () => {
  return (
    <>
      <a className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <svg
          className="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 300"
        >
          <title>Figma.logo</title>
          <desc>Created using Figma</desc>
          <path
            d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
            fill="#0acf83"
          />
          <path
            d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
            fill="#a259ff"
          />
          <path
            d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
            fill="#f24e1e"
          />
          <path
            d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
            fill="#ff7262"
          />
          <path
            d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
            fill="#1abcfe"
          />
        </svg>
        Get Figma file
      </a>
    </>
  );
};

export default FigmaLogo;
