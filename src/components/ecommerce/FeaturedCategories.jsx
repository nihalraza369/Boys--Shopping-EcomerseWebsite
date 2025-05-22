import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shirt, Store, Users, Zap } from 'lucide-react';

const categories = [
  { 
    name: 'Shalwar Kameez', 
    icon: <Users size={36} className="text-accent" />,
    description: "Traditional & elegant outfits for special occasions.",
    link: "/category/shalwar-kameez=",
    imgKey: "shalwar-kameez-category",
    Image:"https://i.pinimg.com/736x/6f/b9/b8/6fb9b88ee53c7df64b0ce1bd0f37e9a5.jpg",
  },
  { 
    name: 'Pant Shirts', 
    icon: <Shirt size={36} className="text-accent" />,
    description: "Smart casuals for everyday style and comfort.",
    link: "/category/pant-shirts",
    imgKey: "pant-shirts-category",
    Image:"https://i.pinimg.com/736x/ff/5e/4c/ff5e4c8f2179b105f769cdf6e3076cfe.jpg"
  },
  { 
    name: 'Shirt Trousers', 
    icon: <Store size={36} className="text-accent" />,
    description: "Formal and semi-formal sets for a dapper look.",
    link: "/category/shirt-trousers",
    imgKey: "shirt-trousers-category",
    Image:"https://i.pinimg.com/736x/ab/be/f6/abbef6ad53b9a1b97fa88384b3d1aa28.jpg"
  },
  { 
    name: 'Activewear', 
    icon: <Zap size={36} className="text-accent" />,
    description: "Comfortable and stylish for play and sports.",
    link: "/category/activewear",
    imgKey: "activewear-category",
    Image:"https://i.pinimg.com/736x/9e/0f/33/9e0f33589f75d4dc253e0c1c5229f40f.jpg"

  },
];

const FeaturedCategories = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Shop By <span className="gradient-text-brand">Category</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections tailored for every Stylish personality and occasion.
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={cardVariants}>
              <Link to={category.link} className="block category-card text-center card-hover-effect h-full flex flex-col">
                <div className="relative aspect-video mb-5 rounded-lg overflow-hidden">
                  <img  alt={`Showcase image for ${category.name} category`} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" src={`${category.Image}`}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-3 bg-card/80 rounded-full shadow-md backdrop-blur-sm">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{category.description}</p>
                <span className="mt-4 inline-block text-accent font-semibold hover:underline">
                  Shop Now &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedCategories;