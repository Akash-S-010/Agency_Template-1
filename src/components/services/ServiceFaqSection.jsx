import React from "react";
import ReusableFAQ from "../ui/ReusableFAQ";
import { servicesPageFaqs } from "./servicesContent.js";

const ServiceFaqSection = () => {
  const faqData = servicesPageFaqs.map((item, index) => ({
    id: String(index + 1),
    question: item.question,
    answer: item.answer,
  }));

  return <ReusableFAQ faqData={faqData} />;
};

export default ServiceFaqSection;
