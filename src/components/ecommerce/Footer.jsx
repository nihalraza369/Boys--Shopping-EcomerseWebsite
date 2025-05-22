import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Youtube size={20} />, href: "https://youtube.com", label: "Youtube" },
  ];

  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "Shalwar Kameez", href: "/category/shalwar-kameez" },
        { name: "Pant Shirts", href: "/category/pant-shirts" },
        { name: "Shirt Trousers", href: "/category/shirt-trousers" },
        { name: "New Arrivals", href: "/category/new-arrivals" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faq" },
        { name: "Shipping & Returns", href: "/shipping-returns" },
        { name: "Size Guide", href: "/size-guide" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Affiliates", href: "/affiliates" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border/50 section-padding !pb-8 !pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className="text-3xl font-extrabold mb-4 inline-block">
              <span className="gradient-text-brand">Nihal Clothes</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Dress your young ones in style with our trendy and comfortable clothing collections.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <p className="font-semibold text-lg mb-4">{section.title}</p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <motion.p 
            className="text-muted-foreground text-sm mb-4 sm:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            © {currentYear} Nihal Clothes. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full hover:bg-accent/20"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-accent" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;