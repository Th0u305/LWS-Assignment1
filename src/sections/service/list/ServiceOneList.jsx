import React from "react";
import CircleTick from "../logo/CircleTick";
import { listArray, listArray2 } from "../data/listData";
import H1Text from "../../Parts/H1Text";
import PText from "../../Parts/PText";

const ServiceOneList = () => {
  return (
    <>
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <H1Text text="Work with tools you already use" />
          <PText
            text="Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease."
          />

          <ul
            role="list"
            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            {listArray.map((item) => (
              <li key={item.id} className="flex space-x-3">
                <CircleTick />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  {item.data}
                </span>
              </li>
            ))}
          </ul>
          <PText
            text="Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions."
          />
        </div>
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="./assets/features/feature-1.png"
          alt="dashboard feature image"
        />
      </div>
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="./assets/features/feature-2.png"
          alt="feature image 2"
        />
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <H1Text text="We invest in the world’s potential" />
          <PText
            text="Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease."
          />

          <ul
            role="list"
            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            {listArray2.map((item) => (
              <li key={item.id} className="flex space-x-3">
                <CircleTick />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  {item.data}
                </span>
              </li>
            ))}
          </ul>

          <PText
            text="Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions."
          />
        </div>
      </div>
    </>
  );
};

export default ServiceOneList;
