import { motion } from 'framer-motion';

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging experiences",
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive growth and engagement",
      icon: "📈"
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive brand development and positioning strategies",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Service;