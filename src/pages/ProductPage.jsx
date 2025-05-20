import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, CheckCircle, Truck, ArrowLeft } from 'lucide-react';

const mockProductDetails = {
  sk1: { id: 'sk1', name: 'Classic White Shalwar Kameez', price: '45.00', description: 'Elegant and timeless white shalwar kameez for boys, perfect for festive occasions. Made with premium quality cotton for comfort and style.', imgKey: 'sk-white-detail', rating: 4.5, reviews: 120, category: 'shalwar-kameez', sizes: ['S', 'M', 'L', 'XL'], colors: ['White', 'Cream'] },
  ps1: { id: 'ps1', name: 'Checkered Pant Shirt Set', price: '50.00', description: 'Smart checkered pant shirt set for a trendy casual look. Features a comfortable cotton shirt and matching pants.', imgKey: 'ps-checkered-detail', rating: 4.7, reviews: 110, category: 'pant-shirts', sizes: ['2Y', '4Y', '6Y', '8Y'], colors: ['Blue Check', 'Red Check'] },
  // Add more mock products as needed for other IDs
};

const ProductPage = () => {
  const { productId } = useParams();
  // Fallback to a default product if ID doesn't match or use a more robust data fetching in real app
  const product = mockProductDetails[productId] || {
    id: productId,
    name: 'Awesome Product Title',
    price: '59.99',
    description: 'This is a detailed description of the awesome product. It highlights its key features, benefits, and why it\'s a must-have item for your little one. Crafted with care and designed for style and comfort.',
    imgKey: 'default-product-image',
    rating: 4.6,
    reviews: 85,
    category: 'general',
    sizes: ['S', 'M', 'L'],
    colors: ['Blue', 'Green', 'Red'],
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    <motion.div 
      className="section-padding pt-28 md:pt-32 bg-background"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container-custom">
        <Link to={`/category/${product.category}`} className="inline-flex items-center text-muted-foreground hover:text-accent mb-6">
            <ArrowLeft size={18} className="mr-2"/> Back to {product.category.replace('-', ' ')}
        </Link>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="relative aspect-square rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img  
              alt={`Detailed view of ${product.name}`} 
              className="w-full h-full object-cover"
             src="" />
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
              BESTSELLER
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold">{product.name}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(Math.floor(product.rating))].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                {product.rating % 1 !== 0 && <Star size={20} fill="currentColor" style={{clipPath: `inset(0 ${100 - (product.rating % 1)*100}% 0 0)`}} />}
                {[...Array(5 - Math.ceil(product.rating))].map((_, i) => <Star key={`empty-${i}`} size={20} />)}
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="text-4xl font-bold text-accent">${product.price}</p>
            
            <p className="text-lg text-muted-foreground">{product.description}</p>

            <div>
              <p className="font-semibold mb-2">Available Sizes:</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <Button key={size} variant="outline" size="sm">{size}</Button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Available Colors:</p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button key={color} aria-label={color} className="w-8 h-8 rounded-full border-2 border-border focus:ring-2 focus:ring-accent" style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}></button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gradient-bg-brand text-primary-foreground flex-1">
                <ShoppingCart size={20} className="mr-2" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 hover:text-accent flex-1">
                Buy Now
              </Button>
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle size={16} className="mr-2 text-green-500" /> In Stock - Ready to Ship
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Truck size={16} className="mr-2 text-blue-500" /> Free Shipping on orders over $50
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Related Products Section (Placeholder) */}
        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="product-card group">
                 <Link to={`/product/sk${i > 2 ? i-2 : i }`} className="block"> {/* Example link */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img  alt={`Related product ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1702479744451-ccd6e31495d5" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-md font-semibold mb-1 truncate">Related Product Title {i}</h3>
                    <p className="text-lg font-bold text-accent">$39.99</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPage;