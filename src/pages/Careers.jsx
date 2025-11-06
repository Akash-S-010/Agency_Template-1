import React from "react";
import BlurText from "../components/ui/BlurText";
import PageCTA from "../components/ui/PageCTA";

const benefits = [
  {
    title: "Remote-first flexibility",
    description:
      "Work from anywhere in the UAE or beyond with the option to collaborate in Dubai when projects need face time.",
  },
  {
    title: "Growth budget",
    description:
      "Every team member receives an annual stipend for courses, certifications, and conferences that sharpen their craft.",
  },
  {
    title: "Purposeful work",
    description:
      "Partner with ambitious brands and help them launch campaigns that produce measurable outcomes across the Gulf region.",
  },
  {
    title: "Wellbeing support",
    description:
      "Enjoy generous PTO, wellness days, and access to on-demand coaching so you can bring your best self to every project.",
  },
];

const roles = [
  {
    title: "Senior Performance Marketer",
    location: "Dubai · Remote-friendly",
    type: "Full-time",
    summary:
      "Own paid media strategy across Google, Meta, and TikTok while coaching a pod of specialists to deliver reliable ROAS.",
  },
  {
    title: "Content Strategist",
    location: "Dubai · Hybrid",
    type: "Full-time",
    summary:
      "Translate insights into story-driven content plans for web, social, and lifecycle channels that accelerate brand growth.",
  },
  {
    title: "Account Manager",
    location: "Dubai · Remote-friendly",
    type: "Full-time",
    summary:
      "Guide enterprise and scale-up clients with clear roadmaps, transparent reporting, and cross-channel coordination.",
  },
];

const values = [
  {
    title: "Lead with curiosity",
    description:
      "We experiment, test, and iterate to keep our partners ahead of an evolving digital landscape.",
  },
  {
    title: "Own the outcome",
    description:
      "Every brief is an opportunity to think deeper, collaborate better, and deliver results we can be proud of.",
  },
  {
    title: "Build together",
    description:
      "We work as one team across disciplines, sharing knowledge and celebrating wins around the world.",
  },
];

const Careers = () => {
  return (
    <main className="bg-white text-black">
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl space-y-8 pt-24">
            <span className="inline-block px-4 py-2 text-primary text-xs uppercase font-light rounded-full">
              /-- Careers at Beyond Agency
            </span>
            <h1 className="font-title text-3xl md:text-6xl font-bold leading-tight text-primary">
              <BlurText
                as="span"
                text="Do the best work of your career in Dubai’s most agile marketing team"
                animateBy="words"
                direction="bottom"
                delay={60}
                className="block"
              />
            </h1>
            <div className="space-y-4 max-w-3xl text-base md:text-lg leading-relaxed text-slate-600">
              <p>
                We’re a remote-first collective of strategists, creatives, and growth specialists who love helping brands move beyond expectations. If you thrive in fast-paced environments and value meaningful collaboration, you’ll feel at home here.
              </p>
              <p>
                Explore our open roles or send a speculative application to <a className="text-primary font-medium" href="mailto:careers@beyondagency.ae">careers@beyondagency.ae</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-4xl font-normal leading-tight text-black">
            What you can expect when you join
          </h2>
          <ul className="grid gap-8 md:grid-cols-2">
            {benefits.map((item, index) => (
              <li key={index} className="space-y-2 border-l-2 border-primary/40 pl-5">
                <p className="text-base md:text-lg font-medium text-black">
                  {item.title}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-4xl font-normal leading-tight text-black">
            How we show up every day
          </h2>
          <div className="space-y-8">
            {values.map((item, index) => (
              <article key={index} className="space-y-3 border-t border-slate-200 pt-6">
                <h3 className="text-xl md:text-2xl font-medium text-black">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-normal leading-tight text-black">
              Open positions
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-3xl">
              Don’t see the exact role you were hoping for? We’re always keen to meet talented people. Email your portfolio, case studies, or CV to <a className="text-primary font-medium" href="mailto:careers@beyondagency.ae">careers@beyondagency.ae</a>.
            </p>
          </div>
          <div className="space-y-10">
            {roles.map((role, index) => (
              <article key={index} className="space-y-4 border-t border-slate-200 pt-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-black">
                      {role.title}
                    </h3>
                  </div>
                  <div className="text-sm md:text-base text-slate-500 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                      {role.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary/60" aria-hidden="true" />
                      {role.type}
                    </span>
                  </div>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate-600">
                  {role.summary}
                </p>
                <div>
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition"
                    href="mailto:careers@beyondagency.ae?subject=Application%20-%20"
                  >
                    Apply by email →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to build the next wave of campaigns?"
        description="Share your CV, case studies, or personal website and tell us what excites you about partnering with Beyond Agency."
        buttonText="Send your profile"
        buttonProps={{
          as: "a",
          href: "mailto:careers@beyondagency.ae",
        }}
      />
    </main>
  );
};

export default Careers;
