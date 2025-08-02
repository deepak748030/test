import React from 'react';
import ProductCard, { Product } from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
  cartItems: { [key: number]: number };
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onProductClick: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  cartItems,
  onAddToCart,
  onUpdateQuantity,
  onProductClick,
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600">
            Hand-picked fresh products at great prices
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard
                product={product}
                quantity={cartItems[product.id] || 0}
                onAddToCart={onAddToCart}
                onUpdateQuantity={onUpdateQuantity}
                onProductClick={onProductClick}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;