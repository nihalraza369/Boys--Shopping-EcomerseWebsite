import React from 'react';
import HeroSection from '@/components/ecommerce/HeroSection';
import FeaturedCategories from '@/components/ecommerce/FeaturedCategories';
import OutfitCarousel from '@/components/ecommerce/OutfitCarousel';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingBag, Percent, Truck } from 'lucide-react';

const HomePage = () => {

  const ctaSectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const whyShopItems = [
    {
      icon: <ShoppingBag size={32} className="text-accent" />,
      title: "Trendy Styles",
      description: "Curated collections of the latest boys' fashion."
    },
    {
      icon: <Percent size={32} className="text-accent" />,
      title: "Great Value",
      description: "Affordable prices without compromising on quality."
    },
    {
      icon: <Truck size={32} className="text-accent" />,
      title: "Fast Shipping",
      description: "Quick and reliable delivery to your doorstep."
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturedCategories />
      <OutfitCarousel />
      
      {/* Why Shop With Us Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Why Shop With <span className="gradient-text-brand">Nihal Clothes?</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to providing the best for your Stylish ones.
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
          >
            {whyShopItems.map((item, index) => (
              <motion.div
                key={index}
                variants={ctaSectionVariants}
                className="bg-card p-8 rounded-xl shadow-lg text-center card-hover-effect"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent/10 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={ctaSectionVariants}
      >
        <div className="container-custom text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Find the Perfect Outfit?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Browse our collections today and give your man one a style upgrade. Enjoy exclusive deals and new arrivals!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-foreground text-lg px-10 py-6" asChild>
              <Link to="/category/all">
                Start Shopping Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;