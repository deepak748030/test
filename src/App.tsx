import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import HowItWorks from './components/HowItWorks';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import AccountPage from './components/AccountPage';
import Footer from './components/Footer';
import { products } from './data/products';
import { Product } from './components/ProductCard';

function App() {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const totalCartItems = Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => {
        const newItems = { ...prev };
        delete newItems[productId];
        return newItems;
      });
    } else {
      setCartItems(prev => ({
        ...prev,
        [productId]: quantity
      }));
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailsOpen(true);
  };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header 
        cartItems={totalCartItems} 
        onCartClick={() => setIsCartOpen(true)} 
        onAccountClick={() => setIsAccountOpen(true)}
      />
      <Hero />
      <Categories />
      <FeaturedProducts
        products={products}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
        onProductClick={handleProductClick}
      />
      <HowItWorks />
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        products={products}
        onUpdateQuantity={handleUpdateQuantity}
      />
      
      <ProductDetails
        product={selectedProduct}
        isOpen={isProductDetailsOpen}
        onClose={() => setIsProductDetailsOpen(false)}
        quantity={selectedProduct ? cartItems[selectedProduct.id] || 0 : 0}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
      
      <AccountPage
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </div>
  );
}

export default App;