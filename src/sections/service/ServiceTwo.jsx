import React from "react";
import RightArrow from "./logo/RightArrow";
import Server from "./logo/Server";
import User from "./logo/User";
import Map from "./logo/Map";
import Cart from "./logo/Cart";
import H1Text from "../Parts/H1Text";
import H3Text from "../Parts/H3Text";

const ServiceTwo = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
            Trusted Worldwide
          </p>

          <H1Text text="Trusted by over 600 million users and 10,000 teams" />

          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Explore Legality Guide
                <RightArrow />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Visit the Trust Center
                <RightArrow />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <Server />
            <H3Text text="99.99% uptime" />
            <p className="font-light text-gray-500 dark:text-gray-400">
              For Landwind, with zero maintenance downtime
            </p>
          </div>
          <div>
            <User />

            <H3Text text="600M+ Users" />

            <p className="font-light text-gray-500 dark:text-gray-400">
              Trusted by over 600 milion users around the world
            </p>
          </div>
          <div>
            <Map />

            <H3Text text="100+ countries" />

            <p className="font-light text-gray-500 dark:text-gray-400">
              Have used Landwind to create functional websites
            </p>
          </div>
          <div>
            <Cart />

            <H3Text text="5+ Million" />

            <p className="font-light text-gray-500 dark:text-gray-400">
              Transactions per day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;
