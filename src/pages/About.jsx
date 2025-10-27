import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen  text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-8">About Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-300 leading-relaxed">
              Ellis Digital® is a cutting-edge digital agency specializing in creating 
              exceptional digital experiences. We combine creativity, technology, and 
              strategy to deliver solutions that drive results.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses through innovative digital solutions that create 
              meaningful connections between brands and their audiences.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;