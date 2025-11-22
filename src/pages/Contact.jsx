import React, { useState } from "react";
import { Mail, Phone, MapPin, X, CheckCircle } from "lucide-react";
import Button from "../components/ui/Button";
import BlurText from "../components/ui/BlurText";
import { motion, AnimatePresence } from "framer-motion";

const sectionRevealProps = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.1 },
};

const contactDetails = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email",
    description: "Connect@beyondagency.ae",
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Phone",
    description: "+971 56 364 8546",
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Office",
    description: "Dubai, UAE",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co - a free form submission service
      const response = await fetch(
        "https://formsubmit.co/ajax/akash727349@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            message: formData.message,
            _subject: `New Contact Form Submission from ${formData.name}`,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setShowModal(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl flex flex-col gap-6 pt-24">
            <span className="inline-block px-4 py-2 text-primary text-xs uppercase font-light rounded-full">
              /-- Contact Us
            </span>
            <h1 className="font-title text-3xl md:text-6xl font-bold leading-tight text-primary">
              <BlurText
                as="span"
                text="Let's build transformative digital experiences together"
                animateBy="words"
                direction="bottom"
                delay={80}
                className="block"
              />
            </h1>
            <p className="max-w-3xl text-base md:text-xl text-slate-600 leading-relaxed">
              Share your vision and we'll co-create a roadmap that links
              business goals with measurable outcomes. Expect a thoughtful
              response from our team within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <motion.section
        className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20"
        {...sectionRevealProps}
      >
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-heading font-normal text-black">
                Reach out to our team
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                We're here to discuss goals, timelines, and success metrics.
                Tell us about your challenge and we'll shape a tailored
                engagement model for you.
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
                    <h3 className="text-xl font-semibold text-gray-800">
                      {detail.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-base md:text-lg font-semibold text-black">
                Prefer a direct meeting?
              </h4>
              <p className="text-slate-600 mt-2">
                Schedule a discovery call and we'll align on next steps to
                fast-track your initiative.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 md:p-10 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="space-y-2">
                <span className="text-sm font-normal text-black">
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-normal text-black">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="jane@company.com"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-normal text-black">Company</span>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Beyond"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-normal text-black">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="(+971) 56 364 8546"
                />
              </label>
            </div>
            <label className="space-y-2 block">
              <span className="text-sm font-normal text-black">
                Project Goals
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-black focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Tell us about the outcomes you're aiming for"
              />
            </label>

            <div className="flex flex-col gap-3">
              <Button
                text={isSubmitting ? "Submitting..." : "Submit Inquiry"}
                type="submit"
                width="full"
                disabled={isSubmitting}
              />
              <p className="text-sm text-slate-500">
                By submitting this form, you consent to our team contacting you
                regarding your request.
              </p>
            </div>
          </form>
        </div>
      </motion.section>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Message Received!
                  </h3>
                  <p className="text-lg text-gray-600">
                    We'll catch you soon! 
                  </p>
                </div>

                <p className="text-base text-gray-500 leading-relaxed">
                  Thank you for reaching out. Our team will review your inquiry
                  and get back to you soon.
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-primary text-white py-3 px-6 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Contact;
