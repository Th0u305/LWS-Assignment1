import React from "react";
import { footerData1, footerData2, footerData3, footerData4 } from "./data/footerData";

const SubFooterOne = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Company
          </h3>
          <ul className="text-gray-500 dark:text-gray-400">
            {footerData1.map((item) => (
              <li className="mb-4" key={item.id}>
                <a href="#" className=" hover:underline">
                  {item.data}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Help center
          </h3>
          <ul className="text-gray-500 dark:text-gray-400">
            {footerData2.map((item) => (
              <li className="mb-4" key={item.id}>
                <a href="#" className=" hover:underline">
                  {item.data}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Legal
          </h3>
          <ul className="text-gray-500 dark:text-gray-400">
            {footerData3.map((item) => (
              <li className="mb-4" key={item.id}>
                <a href="#" className=" hover:underline">
                  {item.data}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Company
          </h3>
          <ul className="text-gray-500 dark:text-gray-400">
            {footerData1.map((item) => (
              <li className="mb-4" key={item.id}>
                <a href="#" className=" hover:underline">
                  {item.data}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Download
          </h3>
          <ul className="text-gray-500 dark:text-gray-400">
            {footerData4.map((item) => (
              <li className="mb-4" key={item.id}>
                <a href="#" className=" hover:underline">
                  {item.data}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
    </>
  );
};

export default SubFooterOne;
