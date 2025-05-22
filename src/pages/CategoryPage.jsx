import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Filter, ChevronDown, ArrowLeft } from 'lucide-react';

const baseMockProducts = {
  'shalwar-kameez': [
    { id: 'sk1', name: 'Classic Black Shalwar Kameez', price: '45.00', imgKey: 'sk-white', rating: 4.5, reviews: 120, Image:"https://i.pinimg.com/736x/77/ea/8c/77ea8cbc64fd70a1cd94d9863b45e061.jpg"},
    { id: 'sk2', name: 'Embroidered Brown Kurta Set', price: '65.00', imgKey: 'sk-blue-embroidered', rating: 4.8, reviews: 95 , Image:"https://i.pinimg.com/736x/6f/b9/b8/6fb9b88ee53c7df64b0ce1bd0f37e9a5.jpg"},
    { id: 'sk3', name: 'Festive light B Shalwar Kameez', price: '75.00', imgKey: 'sk-maroon-festive', rating: 4.6, reviews: 70, Image:"https://i.pinimg.com/736x/dd/80/20/dd8020b690831d782317606522b6e481.jpg"},
    { id: 'sk4', name: 'Casual Green Kurta', price: '35.00', imgKey: 'sk-grey-casual', rating: 4.3, reviews: 150 , Image:"https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202304/183786143_457807541985784_1069565146975699327_n.jpg?VersionId=3.XZ0EA_522274246659059329_n.jpg?VersionId=YxGtpNhW1kXoSqOaZKBaxwLDbELr2bUm&siXgdVQlALHTu05J.yJzbb_JbAu&size=686:*"},
  ],
  'pant-shirts': [
    { id: 'ps1', name: 'Checkered Pant Shirt Set', price: '50.00', imgKey: 'ps-checkered', rating: 4.7, reviews: 110,Image:"https://i.pinimg.com/736x/80/a3/41/80a34132c11d214272d962866d036586.jpg" },
    { id: 'ps2', name: 'Denim Shirt with Khaki Pants', price: '55.00', imgKey: 'ps-denim-khaki', rating: 4.4, reviews: 80 ,Image:"https://i.pinimg.com/736x/58/3b/bf/583bbf9a994b572a74cddb51bd45b818.jpg"},
    { id: 'ps3', name: 'Linen Shirt and Pant Combo', price: '60.00', imgKey: 'ps-linen-combo', rating: 4.9, reviews: 60,Image:"https://i.pinimg.com/736x/6f/f6/10/6ff610074ef18e0d9b1a91dd8d564c50.jpg" },
    { id: 'ps4', name: 'Striped Shirt with Navy Pants', price: '48.00', imgKey: 'ps-striped-navy', rating: 4.2, reviews: 130 ,Image:"https://i.pinimg.com/736x/22/76/b0/2276b0b58b5908764f4ed70317fbe6df.jpg"},
  ],
  'shirt-trousers': [
    { id: 'st1', name: 'Formal white/B Shirt & Trousers', price: '70.00', imgKey: 'st-formal-black', rating: 4.6, reviews: 90,Image:"https://i.pinimg.com/736x/68/fa/0b/68fa0b1a8327163d5d35f797a395d7b8.jpg"},
    { id: 'st2', name: 'Beige Chinos with pink Shirt', price: '62.00', imgKey: 'st-beige-white', rating: 4.5, reviews: 100,Image:"https://i.pinimg.com/736x/82/61/16/826116ebd135c9b7a2c549b6660b66ea.jpg" },
    { id: 'st3', name: 'Party Wear Velvet Blazer Set', price: '90.00', imgKey: 'st-velvet-blazer', rating: 4.9, reviews: 50 ,Image:"https://i.pinimg.com/736x/83/c7/28/83c728b98d301fa13c8e6e137cba1e3c.jpg"},
    { id: 'st4', name: 'Casual green/white Trousers & Shirt', price: '58.00', imgKey: 'st-corduroy-casual', rating: 4.3, reviews: 120,Image:"https://i.pinimg.com/736x/1b/0d/82/1b0d82a1a92a35a368ca92e59c1f95d7.jpg" },
  ],
  'new-arrivals': [
    { id: 'na1', name: 'Summer Print T-Shirt', price: '25.00', imgKey: 'na-summer-tshirt', rating: 4.8, reviews: 200 ,Image:"https://i.pinimg.com/736x/db/0a/47/db0a47df64754fd94c035fcbbcca8b6c.jpg"},
    { id: 'na2', name: 'Lightweight Cargo Shorts and trouser', price: '30.00', imgKey: 'na-cargo-shorts', rating: 4.6, reviews: 180 , Image:"https://i.pinimg.com/736x/e0/06/0d/e0060d5e0e5d260d897b7fbd87fdea3c.jpg" },
    { id: 'na3', name: 'Hooded Windbreaker Jacket', price: '45.00', imgKey: 'na-windbreaker', rating: 4.7, reviews: 150,Image:"https://i.pinimg.com/736x/be/86/e3/be86e39ee8863f6fce2511f529686ef1.jpg" },
  ],
   'sale': [
    { id: 'sale1', name: 'Previous Season Kurta (50% off)', price: '22.50', originalPrice: '45.00', imgKey: 'sale-kurta', rating: 4.2, reviews: 90,Image:"https://i.pinimg.com/736x/dd/80/20/dd8020b690831d782317606522b6e481.jpg" },
    { id: 'sale2', name: 'Casual T-Shirt (30% off)', price: '17.50', originalPrice: '25.00', imgKey: 'sale-tshirt', rating: 4.0, reviews: 110,Image:"https://i.pinimg.com/736x/7d/d9/09/7dd909868a8a4f7428fdee5548c20e09.jpg" },
  ]
};

const mockProducts = {
  ...baseMockProducts,
  'all': [
    ...Object.values(baseMockProducts).flat().filter(p => p.id.match(/^(sk|ps|st|na|sale)\d+$/)).slice(0,12) // Increased to 12 for better 'all' view
  ],
};


const CategoryPage = () => {
  const { categoryName } = useParams();
  const products = mockProducts[categoryName] || mockProducts['all'];
  const pageTitle = categoryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="section-padding pt-28 md:pt-32 bg-background">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-accent mb-4">
            <ArrowLeft size={18} className="mr-2"/> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            {pageTitle} <span className="gradient-text-brand">Collection</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover stylish and comfortable {pageTitle.toLowerCase()} for your Gentleman one.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <span className="text-muted-foreground">{products.length} items found</span>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} /> Filters
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              Sort by <ChevronDown size={16} />
            </Button>
          </div>
        </div>

        {products.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-16"
          >
            <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Products Found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any products in the "{pageTitle}" category.
            </p>
            <Button asChild className="gradient-bg-brand text-primary-foreground">
              <Link to="/">Explore Other Categories</Link>
            </Button>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={cardVariants} className="product-card group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img  
                      alt={`Image of ${product.name}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     src= {`${product.Image}`}/>
                    {product.originalPrice && (
                      <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">SALE</span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
                      <Button size="sm" variant="outline" className="bg-white/20 text-white border-white/50 hover:bg-white hover:text-black">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1 truncate group-hover:text-accent transition-colors">{product.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <p className="text-xl font-bold text-accent">${product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">${product.originalPrice}</p>
                      )}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="text-yellow-400">★</span> {product.rating} ({product.reviews} reviews)
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
