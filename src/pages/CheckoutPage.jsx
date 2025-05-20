import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, CreditCard } from 'lucide-react';

// Mock data for order summary
const mockOrderItems = [
  { id: 'sk1', name: 'Classic White Shalwar Kameez', price: '45.00', quantity: 1, imgKey: 'sk-white-checkout' },
  { id: 'ps1', name: 'Checkered Pant Shirt Set', price: '50.00', quantity: 2, imgKey: 'ps-checkered-checkout' },
];
const subtotal = mockOrderItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
const shipping = subtotal > 50 ? 0 : 10;
const total = subtotal + shipping;

const CheckoutPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const inputFieldVariants = {
    initial: { opacity: 0, x: -10 },
    animate: (i) => ({ opacity: 1, x: 0, transition: { duration: 0.3, delay: i * 0.05 } }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send to backend, Stripe, etc.
    alert('Order Placed (Simulated)!');
  };

  return (
    <motion.div 
      className="section-padding pt-28 md:pt-32 bg-background"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container-custom">
        <Link to="/cart" className="inline-flex items-center text-muted-foreground hover:text-accent mb-6">
            <ArrowLeft size={18} className="mr-2"/> Back to Cart
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10">Secure <span className="gradient-text-brand">Checkout</span></h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Shipping & Payment Details */}
          <div className="lg:col-span-2 bg-card p-8 rounded-xl shadow-xl space-y-8">
            {/* Shipping Address */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { id: 'firstName', label: 'First Name', placeholder: 'nihal' },
                  { id: 'lastName', label: 'Last Name', placeholder: 'raza' },
                  { id: 'address', label: 'Address', placeholder: '123 Main St', colSpan: 'sm:col-span-2' },
                  { id: 'city', label: 'City', placeholder: 'San Francisco' },
                  { id: 'zipCode', label: 'ZIP Code', placeholder: '94107' },
                  { id: 'email', label: 'Email Address', placeholder: 'john.doe@example.com', type: 'email', colSpan: 'sm:col-span-2' },
                  { id: 'phone', label: 'Phone Number', placeholder: '(555) 123-4567', type: 'tel', colSpan: 'sm:col-span-2' },
                ].map((field, i) => (
                  <motion.div key={field.id} className={field.colSpan || ''} custom={i} variants={inputFieldVariants} initial="initial" animate="animate">
                    <label htmlFor={field.id} className="block text-sm font-medium mb-1.5 text-muted-foreground">{field.label}</label>
                    <input 
                      type={field.type || 'text'} 
                      id={field.id} 
                      name={field.id} 
                      required 
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-shadow" 
                    />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center"><CreditCard size={24} className="mr-3 text-accent"/>Payment Details</h2>
              <div className="space-y-6">
                 <motion.div custom={7} variants={inputFieldVariants} initial="initial" animate="animate">
                    <label htmlFor="cardNumber" className="block text-sm font-medium mb-1.5 text-muted-foreground">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" required placeholder="•••• •••• •••• ••••" className="w-full px-4 py-2.5 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-shadow" />
                  </motion.div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div custom={8} variants={inputFieldVariants} initial="initial" animate="animate">
                    <label htmlFor="expiryDate" className="block text-sm font-medium mb-1.5 text-muted-foreground">Expiry Date</label>
                    <input type="text" id="expiryDate" name="expiryDate" required placeholder="MM / YY" className="w-full px-4 py-2.5 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-shadow" />
                  </motion.div>
                  <motion.div custom={9} variants={inputFieldVariants} initial="initial" animate="animate">
                    <label htmlFor="cvc" className="block text-sm font-medium mb-1.5 text-muted-foreground">CVC / CVV</label>
                    <input type="text" id="cvc" name="cvc" required placeholder="•••" className="w-full px-4 py-2.5 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-shadow" />
                  </motion.div>
                </div>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <motion.div 
            className="lg:col-span-1 bg-card p-8 rounded-xl shadow-xl sticky top-28"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {mockOrderItems.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                     <img  alt={item.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1652803450909-7d03ce356360" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm leading-tight">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="ml-auto font-semibold text-sm">${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 py-4 border-t border-b border-border text-sm text-muted-foreground">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
            </div>
            <div className="flex justify-between text-xl font-bold my-6">
              <span>Total</span>
              <span className="text-accent">${total.toFixed(2)}</span>
            </div>
            <Button type="submit" size="lg" className="w-full gradient-bg-brand text-primary-foreground flex items-center">
              <Lock size={18} className="mr-2"/> Place Order Securely
            </Button>
            <p className="text-xs text-muted-foreground mt-4 text-center">By placing your order, you agree to our Terms & Conditions.</p>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default CheckoutPage;