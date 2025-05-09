import React from "react";
import SubFooterOne from "./SubFooterOne";
import SubFooterTwo from "./SubFooterTwo";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <SubFooterOne />
        <SubFooterTwo />
      </div>
    </footer>
  );
};

export default Footer;
