import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const outfits = [
  {
    id: 1,
    name: 'Cool Summer Vibe',
    description: 'Perfect for sunny days and outdoor adventures.',
    items: ['Graphic Tee', 'Denim pant', 'Sneakers'],
    price: '75.00',
    imgKey: 'summer-outfit-boy',
    bgColor: 'bg-sky-700',
    Image:"https://i.pinimg.com/736x/7c/90/65/7c906500676ddb75889a44628f8b2236.jpg"
  },
  {
    id: 2,
    name: 'Festive Kurta Set',
    description: 'Elegant traditional wear for special occasions.',
    items: ['Embroidered Kurta', 'Churidar Pajama', 'Khussa Shoes'],
    price: '120.00',
    imgKey: 'kurta-outfit-boy',
    bgColor: 'bg-emerald-700',
    Image:"https://i.pinimg.com/736x/6f/b9/b8/6fb9b88ee53c7df64b0ce1bd0f37e9a5.jpg"
  },
  {
    id: 3,
    name: 'Smart Casual Look',
    description: 'Stylish and comfortable for parties or family gatherings.',
    items: ['Checkered Shirt', 'Chino Pants', 'Loafers'],
    price: '95.00',
    imgKey: 'casual-outfit-boy',
    bgColor: 'bg-amber-700',
    Image:"https://i.pinimg.com/736x/20/45/66/204566ad6918324e6f7cddaaa8dbc542.jpg"
  },
  {
    id: 4,
    name: 'Sporty Active Gear',
    description: 'Ready for action, from playground to sports field.',
    items: ['Track Jacket', 'Sport Shorts', 'Running Shoes'],
    price: '80.00',
    imgKey: 'sporty-outfit-boy',
    bgColor: 'bg-red-700',
    Image:"https://i.pinimg.com/736x/60/ce/26/60ce2628ec6b34bb6060ab9f879726ff.jpg"
  },
];

const OutfitCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % outfits.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + outfits.length) % outfits.length);
  };
  
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer);
  }, [nextSlide]);


  const currentOutfit = outfits[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } 
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] }
    }),
  };
  
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Featured <span className="gradient-text-brand">Outfits</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired with our handpicked complete looks for your man trendsetter.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl min-h-[600px] md:min-h-[550px] flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 ${currentOutfit.bgColor}`}
            >
              <div className="w-full md:w-1/2 h-64 md:h-full relative mb-6 md:mb-0 md:mr-8">
                <img  
                  alt={`Image of ${currentOutfit.name} outfit`} 
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                 src= {`${currentOutfit.Image}`}/>
              </div>

              <motion.div 
                className="w-full md:w-1/2 text-center md:text-left text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-3xl lg:text-4xl font-bold mb-3">{currentOutfit.name}</h3>
                <p className="text-lg mb-4 opacity-90">{currentOutfit.description}</p>
                <div className="mb-6">
                  <span className="text-sm opacity-80">Includes:</span>
                  <ul className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1 mt-1">
                    {currentOutfit.items.map((item, index) => (
                      <li key={index} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <span className="text-3xl font-bold">${currentOutfit.price}</span>
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black" asChild>
                    <Link to={`/product/${currentOutfit.id}`}>
                      Shop This Look <ShoppingBag size={18} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <button onClick={handlePrev} className="carousel-button left-4 md:left-6" aria-label="Previous Outfit">
            <ChevronLeft size={28} />
          </button>
          <button onClick={handleNext} className="carousel-button right-4 md:right-6" aria-label="Next Outfit">
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {outfits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`carousel-dot ${currentIndex === index ? 'active w-6 !bg-white' : '!bg-white/50 hover:!bg-white/80'}`}
                aria-label={`Go to outfit ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitCarousel;