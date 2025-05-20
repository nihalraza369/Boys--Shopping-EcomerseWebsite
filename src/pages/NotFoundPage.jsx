import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center section-padding bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="max-w-md"
      >
        <AlertTriangle size={80} className="mx-auto text-amber-500 mb-8" />
        <h1 className="text-6xl md:text-8xl font-extrabold gradient-text-brand mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-10">
          Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or maybe you just mistyped the URL.
        </p>
        <Button size="lg" asChild className="gradient-bg-brand text-primary-foreground">
          <Link to="/">Go Back to Homepage</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;