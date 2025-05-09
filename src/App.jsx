import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero/Hero";
import CompaniesLogo from "./sections/companiesLogo/CompaniesLogo";
import ServiceOne from "./sections/service/ServiceOne";
import Testimonial from "./sections/testimonial/Testimonial";
import Pricing from "./sections/pricing/Pricing";
import FAQ from "./sections/faq/FAQ";
import Trial from "./sections/Trial";
import Footer from "./sections/footer/Footer";
import ServiceTwo from "./sections/service/ServiceTwo";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <CompaniesLogo />
      <ServiceOne />
      <ServiceTwo/>
      <Testimonial />
      <Pricing />
      <FAQ />
      <Trial />
      <Footer />
    </>
  );
};

export default App;
