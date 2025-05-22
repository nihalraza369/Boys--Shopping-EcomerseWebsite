import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  return (
    <div className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden section-padding pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-secondary/30"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-secondary rounded-full text-sm font-medium text-accent"
          >
            <Sparkles size={16} className="mr-2" />
            New Summer Collection Just Arrived!
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            Style Up Your <span className="gradient-text-brand">Stylish Champ</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            Discover the latest trends in boys' fashion. High-quality, comfortable, and stylish outfits for every occasion.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="gradient-bg-brand text-primary-foreground shadow-lg w-full sm:w-auto" asChild>
              <Link to="/category/new-arrivals">
                Shop New Arrivals <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent/10 hover:text-accent" asChild>
              <Link to="/category/all">
                Explore Collections
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl glassmorphic-overlay">
            <div className="hero-image-container col-span-1 row-span-7 self-end">
              <img  alt="Stylish boy wearing a modern shalwar kameez" className="w-full h-full object-cover aspect-[3/7] rounded-lg card-hover-effect" src="https://i.pinimg.com/736x/15/f0/ee/15f0ee76640feb080d4c0f96f329e0e8.jpg"/>
            </div>
            <div className="hero-image-container col-span-1">
              <img  alt="Young boy in a cool pant shirt outfit" className="w-full h-full object-cover aspect-square rounded-lg card-hover-effect" src="https://i.pinimg.com/736x/f0/2a/b8/f02ab8bc11de781ddae4ccde955ea8f4.jpg" />
            </div>
             <div className="hero-image-container col-span-1">
              <img  alt="Boy dressed in a smart shirt and trouser combination" className="w-full h-full object-cover aspect-square rounded-lg card-hover-effect" src="https://i.pinimg.com/736x/1c/0c/5f/1c0c5f7843d5657504653a5cfb2105e5.jpg" />
            </div>
          </div>
           {/* Decorative Blobs */}
           <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl -z-10"></div>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl -z-10"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;