import React from "react";
import ServiceOneList from "./list/ServiceOneList";

const ServiceOne = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <ServiceOneList/>
      </div>
    </section>
  );
};

export default ServiceOne;
