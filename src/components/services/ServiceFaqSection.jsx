import React from "react";
import ReusableFAQ from "../ui/ReusableFAQ";

const serviceFaqData = [
  {
    id: "1",
    question: "Who is Beyond Agency?",
    answer: "Beyond Agency is a full-service digital marketing company that helps businesses grow through innovative strategies, creative campaigns, and measurable results."
  },
  {
    id: "2",
    question: "What digital marketing services does Beyond Agency provide?",
    answer: "We offer SEO, social media marketing, branding, digital PR, web development, performance marketing, and production services tailored for business growth."
  },
  {
    id: "3",
    question: "How does digital marketing help my business grow?",
    answer: "Digital marketing improves online visibility, drives targeted traffic, increases brand awareness, and generates leads and conversions."
  },
  {
    id: "4",
    question: "What SEO services does Beyond Agency provide?",
    answer: "Beyond Agency offers on-page, off-page, and technical SEO strategies to boost search engine rankings and increase organic traffic."
  },
  {
    id: "5",
    question: "What social media services are offered by Beyond Agency?",
    answer: "We provide social media strategy, campaign management, paid advertising, and performance tracking to grow brand presence."
  },
  {
    id: "6",
    question: "What branding solutions does Beyond Agency offer?",
    answer: "We provide logo design, visual identity creation, brand strategy, and marketing collateral development."
  },
  {
    id: "7",
    question: "What web development services does Beyond Agency offer?",
    answer: "We provide responsive website design, custom web development, CMS integration, and e-commerce solutions."
  },
  {
    id: "8",
    question: "What production services are available at Beyond Agency?",
    answer: "We provide corporate videos, commercials, motion graphics, animation, and post-production services."
  },
  {
    id: "9",
    question: "What performance marketing services does Beyond Agency offer?",
    answer: "We provide targeted advertising, conversion optimization, analytics, and ROI-focused campaigns."
  },
  {
    id: "10",
    question: "How can I get in touch with Beyond Agency?",
    answer: "You can contact us via the website, email, or phone to discuss your project and receive a customized strategy."
  }
];

const ServiceFaqSection = () => {
  return <ReusableFAQ faqData={serviceFaqData} />;
};

export default ServiceFaqSection;
