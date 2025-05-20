import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

const mockCartItems = [
  { id: 'sk1', name: 'Classic White Shalwar Kameez', price: '45.00', quantity: 1, size: 'M', color: 'White', imgKey: 'sk-white-cart' },
  { id: 'ps1', name: 'Checkered Pant Shirt Set', price: '50.00', quantity: 2, size: '4Y', color: 'Blue Check', imgKey: 'ps-checkered-cart' },
];

const CartPage = () => {
  // In a real app, cartItems would come from state/context
  const [cartItems, setCartItems] = React.useState(mockCartItems);

  const handleQuantityChange = (id, delta) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 10; // Example shipping logic
  const total = subtotal + shipping;

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <motion.div 
      className="section-padding pt-28 md:pt-32 bg-background"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-accent mb-6">
            <ArrowLeft size={18} className="mr-2"/> Continue Shopping
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10">Your Shopping <span className="gradient-text-brand">Cart</span></h1>

        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <ShoppingBag size={80} className="mx-auto text-muted-foreground mb-6" />
            <h2 className="text-3xl font-semibold mb-3">Your Cart is Empty</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button size="lg" asChild className="gradient-bg-brand text-primary-foreground">
              <Link to="/">Start Shopping</Link>
            </Button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <motion.div 
              className="lg:col-span-2 space-y-6"
              variants={{ animate: { transition: { staggerChildren: 0.1 }}}}
            >
              {cartItems.map(item => (
                <motion.div 
                  key={item.id} 
                  className="flex flex-col sm:flex-row gap-6 bg-card p-6 rounded-xl shadow-lg"
                  variants={itemVariants}
                  layout
                >
                  <div className="w-full sm:w-32 h-40 sm:h-auto aspect-square rounded-lg overflow-hidden flex-shrink-0">
                    <img  alt={item.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </div>
                  <div className="flex-grow">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-xl font-semibold mb-1 hover:text-accent transition-colors">{item.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-1">Size: {item.size} &bull; Color: {item.color}</p>
                    <p className="text-lg font-bold text-accent mb-3">${parseFloat(item.price).toFixed(2)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border rounded-md">
                        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => handleQuantityChange(item.id, -1)}><Minus size={16}/></Button>
                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => handleQuantityChange(item.id, 1)}><Plus size={16}/></Button>
                      </div>
                      <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-500/10" onClick={() => handleRemoveItem(item.id)}>
                        <Trash2 size={18}/>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="lg:col-span-1 bg-card p-8 rounded-xl shadow-xl sticky top-28"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: cartItems.length * 0.1 + 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6 text-muted-foreground">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
                {/* Add discount/coupon code input here if needed */}
              </div>
              <div className="flex justify-between text-xl font-bold mb-8 pt-4 border-t border-border">
                <span>Total</span>
                <span className="text-accent">${total.toFixed(2)}</span>
              </div>
              <Button size="lg" className="w-full gradient-bg-brand text-primary-foreground" asChild>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-4 text-center">Shipping & taxes calculated at checkout.</p>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CartPage;