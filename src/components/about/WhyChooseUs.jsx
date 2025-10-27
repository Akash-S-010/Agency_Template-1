import React from 'react';
import { FiCheckCircle, FiUsers, FiAward, FiClock, FiShield } from 'react-icons/fi';

const features = [
  {
    icon: <FiCheckCircle className="w-8 h-8 text-primary" />,
    title: 'Proven Track Record',
    description: 'Successfully delivered 150+ projects across various industries with measurable results.'
  },
  {
    icon: <FiUsers className="w-8 h-8 text-primary" />,
    title: 'Expert Team',
    description: 'A team of certified professionals with 10+ years of experience in their respective fields.'
  },
  {
    icon: <FiAward className="w-8 h-8 text-primary" />,
    title: 'Award-Winning',
    description: 'Recognized by industry leaders for our innovative solutions and exceptional service.'
  },
  {
    icon: <FiClock className="w-8 h-8 text-primary" />,
    title: 'Timely Delivery',
    description: 'We value your time and ensure projects are delivered on schedule without compromising quality.'
  },
  {
    icon: <FiShield className="w-8 h-8 text-primary" />,
    title: 'Data Security',
    description: 'Robust security measures to protect your sensitive business information.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-primary font-normal mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            We go beyond traditional IT services to deliver exceptional value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
