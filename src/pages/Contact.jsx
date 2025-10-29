import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../components/ui/Button";

const contactDetails = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email",
    description: "hello@velvetbyte.com",
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Phone",
    description: "+91 98000 12345",
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Office",
    description: "3rd Floor, Tech Park, Bengaluru, India",
  },
];

const Contact = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/70">
            Contact
          </span>
          <h1 className="font-heading text-3xl md:text-6xl font-normal leading-tight">
            Let’s build transformative digital experiences together
          </h1>
          <p className="max-w-3xl text-base md:text-xl text-slate-600 leading-relaxed">
            Share your vision and we’ll co-create a roadmap that links business goals with measurable outcomes. Expect a thoughtful response from our team within one business day.
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-heading font-normal text-slate-900">
                Reach out to our team
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                We’re here to discuss goals, timelines, and success metrics. Tell us about your challenge and we’ll shape a tailored engagement model for you.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{detail.title}</h3>
                    <p className="text-gray-600 mt-1">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-base md:text-lg font-semibold text-slate-900">Prefer a direct meeting?</h4>
              <p className="text-slate-600 mt-2">
                Schedule a discovery call and we’ll align on next steps to fast-track your initiative.
              </p>
            </div>
          </div>

          <form className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 md:p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="space-y-2">
                <span className="text-sm font-normal text-black">Full Name</span>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-normal text-black">Email Address</span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="jane@company.com"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-normal text-black">Company</span>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Velvetbyte"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-normal text-black">Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="(+91) 90000 00000"
                />
              </label>
            </div>
            <label className="space-y-2 block">
              <span className="text-sm font-normal text-black">Project Goals</span>
              <textarea
                name="message"
                rows="5"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Tell us about the outcomes you’re aiming for"
              />
            </label>

            <div className="flex flex-col gap-3">
              <Button text="Submit Inquiry" type="submit" width="full" />
              <p className="text-sm text-slate-500">
                By submitting this form, you consent to our team contacting you regarding your request.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 text-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-normal">
            Ready to kickstart your next project?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            We partner with ambitious teams to deliver digital products that create lasting impact.
            Let’s map out a roadmap that transforms your ideas into results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button text="Book a Discovery Call" />
            <span className="text-sm text-slate-500">Avg. response time: under 24 hours</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
