import React, { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import BlurText from "../components/ui/BlurText";
import ReusableFAQ from "../components/ui/ReusableFAQ";
import PageCTA from "../components/ui/PageCTA";
import { serviceDetails } from "../components/services/servicesContent.js";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  const faqData = useMemo(() => {
    if (!service?.faqs) return [];
    return service.faqs.map((item, index) => ({
      id: String(index + 1),
      question: item.question,
      answer: item.answer,
    }));
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const { title, hero, sections } = service;

  return (
    <main className="bg-white text-slate-900">
      <section className="pt-30 pb-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl space-y-6">
            <span className="inline-block px-4 py-2 text-primary text-xs uppercase font-light rounded-full">
              /-- {title}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-normal leading-tight text-slate-900">
              <BlurText
                as="span"
                text={hero.heading}
                animateBy="words"
                direction="bottom"
                delay={80}
                className="block"
              />
            </h1>
            <div className="space-y-4 text-lg text-muted">
              {hero.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition"
            >
              ← Back to Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl ml-0 md:ml-10 space-y-16">
          {sections.map((section, index) => {
            return (
              <article
                key={index}
                className="space-y-8 border-t border-slate-200 pt-12"
              >
                <div className="space-y-6 text-slate-900">
                  <h2 className="text-2xl md:text-4xl font-normal leading-tight">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-600">
                    {section.paragraphs?.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {Array.isArray(section.list) && section.list.length > 0 ? (
                  <div className="space-y-6">
                    <ul className="space-y-6">
                      {section.list.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="space-y-2 border-l-2 border-primary/40 pl-5"
                        >
                          {item.title && (
                            <p className="text-sm md:text-base font-medium text-slate-900">
                              {item.title}
                            </p>
                          )}
                          {item.description && (
                            <p className="text-sm md:text-base leading-relaxed text-slate-600">
                              {item.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      {faqData.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <ReusableFAQ
              faqData={faqData}
              title={`FAQs`}
              subtitle="Answers to the questions we hear most from teams exploring this service."
              ctaText="Need more clarity?"
            />
          </div>
        </section>
      )}

      <PageCTA
        title="Ready to take the next step?"
        description="Talk with our specialists about how this service can accelerate your marketing performance."
        buttonText="Book a Strategy Call"
      />
    </main>
  );
};

export default ServiceDetail;
