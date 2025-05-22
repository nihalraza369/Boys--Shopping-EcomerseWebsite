import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Shalwar Kameez', href: '/category/shalwar-kameez', id: 'shalwar-kameez' },
    { name: 'Pant Shirts', href: '/category/pant-shirts', id: 'pant-shirts' },
    { name: 'Shirt Trousers', href: '/category/shirt-trousers', id: 'shirt-trousers' },
    { name: 'New Arrivals', href: '/category/new-arrivals', id: 'new-arrivals' },
    { name: 'Sale', href: '/category/sale', id: 'sale' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-3xl font-extrabold">
              <span className="gradient-text-brand">Nihal Clothes</span>
            </Link>
          </motion.div>

          <motion.div 
            className="hidden lg:flex items-center space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                onClick={closeMenu}
                className={`nav-link font-medium ${location.pathname === link.href || location.pathname.startsWith(link.href + '/') ? 'active text-foreground' : 'text-foreground/70'}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="Shopping Cart">
              <Link to="/cart">
                <ShoppingCart size={20} />
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
              </Link>
            </Button>
            <Button variant="outline" className="hidden sm:inline-flex">Login</Button>
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </motion.div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 lg:hidden pt-20"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container-custom flex flex-col space-y-3 p-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block text-lg py-3 px-4 rounded-md transition-colors ${location.pathname === link.href ? 'bg-secondary text-accent' : 'hover:bg-secondary/50'}`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="pt-4 border-t border-border"
              >
                 <Button variant="outline" className="w-full">Login</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;