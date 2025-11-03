import React, { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import BlurText from "../components/ui/BlurText";
import ReusableFAQ from "../components/ui/ReusableFAQ";
import PageCTA from "../components/ui/PageCTA";
import { serviceDetails } from "../content/servicesContent.js";

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
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.3em] bg-primary/10 text-primary rounded-full">
            /-- {title}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-light leading-tight text-slate-900">
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
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition"
            >
              ← Back to Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <article
              key={index}
              className="rounded-3xl bg-white p-8 md:p-10 lg:p-12 shadow-sm border border-slate-200"
            >
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted">
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
                {section.list && (
                  <ul className="space-y-4">
                    {section.list.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 md:p-6"
                      >
                        {item.title && (
                          <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                            {item.title}
                          </h3>
                        )}
                        {item.description && (
                          <p className="mt-2 text-sm md:text-base text-muted leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
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
