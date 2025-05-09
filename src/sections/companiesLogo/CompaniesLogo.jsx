import React from "react";
import Airbnb from "./logos/Airbnb";
import Google from "./logos/Google";
import Microsoft from "./logos/Microsoft";
import Spotify from "./logos/Spotify";
import Mailchamp from "./logos/Mailchamp";
import Mashable from "./logos/Mashable";

const CompaniesLogo = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <Airbnb />
          <Google />
          <Microsoft />
          <Spotify />
          <Mailchamp />
          <Mashable />
        </div>
      </div>
    </section>
  );
};

export default CompaniesLogo;
