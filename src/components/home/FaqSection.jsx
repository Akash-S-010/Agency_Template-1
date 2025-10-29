import React from "react";
import ReusableFAQ from "../ui/ReusableFAQ";

const homeFaqData = [
  {
    id: "1",
    question: "What services does Beyond Agency provide?",
    answer:
      "Beyond Agency offers a complete range of top marketing services in Dubai, including SEO, social media marketing, paid advertising, branding, web design, and content marketing — all designed to help your business grow online.",
  },
  {
    id: "2",
    question:
      "Why is Beyond Agency considered the best digital marketing agency in Dubai?",
    answer:
      "We combine creativity, data-driven strategies, and a passionate team of specialists to deliver measurable results, making us recognized as the best digital marketing agency in Dubai.",
  },
  {
    id: "3",
    question: "How experienced is Beyond Agency?",
    answer:
      "As a young yet dynamic company, we have quickly earned a reputation as the best marketing agency in Dubai, helping brands achieve visibility, engagement, and conversions through expert digital campaigns.",
  },
  {
    id: "4",
    question:
      "Can Beyond Agency manage end-to-end digital marketing strategies?",
    answer:
      "Absolutely. As the best digital marketing company in Dubai, we create integrated campaigns that include SEO, social media, paid ads, and content marketing to ensure cohesive and effective online growth.",
  },
  {
    id: "5",
    question: "How does Beyond Agency measure success?",
    answer:
      "We track performance through key metrics such as website traffic, leads, conversions, and ROI to ensure that our top marketing services in Dubai deliver measurable results for every client.",
  },
  {
    id: "6",
    question: "How can I start working with Beyond Agency?",
    answer:
      "Getting started is easy. Contact our team via form, email, or phone, and our experts will provide a tailored strategy to help your business leverage the services of the best digital marketing agency in Dubai.",
  },
];

const FaqSection = () => {
  return <ReusableFAQ faqData={homeFaqData} />;
};

export default FaqSection;
