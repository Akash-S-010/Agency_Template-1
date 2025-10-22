import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Project+1"
    },
    {
      title: "Mobile Banking App",
      category: "UI/UX Design",
      image: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Project+2"
    },
    {
      title: "Brand Identity System",
      category: "Branding",
      image: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Project+3"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      image: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Project+4"
    },
    {
      title: "Marketing Campaign",
      category: "Digital Marketing",
      image: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Project+5"
    },
    {
      title: "Corporate Website",
      category: "Web Development",
      image: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Project+6"
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
        <h1 className="text-5xl md:text-7xl font-bold mb-12">Portfolio</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">{project.category}</p>
                <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;