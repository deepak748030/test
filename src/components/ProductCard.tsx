import React from 'react';
import { Plus, Minus, Star } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  unit: string;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  quantity, 
  onAddToCart, 
  onUpdateQuantity,
  onProductClick
}) => {
  return (
    <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100 cursor-pointer relative">
      {/* Discount badge */}
      {product.discount && (
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-orange-500 text-white px-2 py-1 rounded-lg text-xs sm:text-sm font-medium z-10">
          {product.discount}% OFF
        </div>
      )}
      
      {/* Product image */}
      <div 
        className="relative mb-3 sm:mb-4 overflow-hidden rounded-xl aspect-square"
        onClick={() => onProductClick(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product info */}
      <div className="space-y-1.5 sm:space-y-3">
        <div onClick={() => onProductClick(product)}>
          <h3 className="font-semibold text-gray-900 text-xs sm:text-lg leading-tight line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm">{product.unit}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 ml-1">
              {product.rating}
            </span>
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-1 sm:space-x-2 min-h-[2rem] sm:min-h-[2.5rem]">
          <span className="text-sm sm:text-2xl font-bold text-gray-900">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-lg text-gray-500 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <div className="pt-2">
          {quantity === 0 ? (
            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-emerald-600 text-white py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-1 text-xs sm:text-base"
            >
              <Plus className="h-3 w-3 sm:h-5 sm:w-5" />
              <span>Add to Cart</span>
            </button>
          ) : (
            <div className="flex items-center justify-between bg-emerald-50 rounded-lg sm:rounded-xl p-1 sm:p-2">
              <button
                onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                className="w-6 h-6 sm:w-10 sm:h-10 bg-white rounded-md sm:rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-100 transition-colors"
              >
                <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
              <span className="font-semibold text-emerald-600 px-1 sm:px-4 text-xs sm:text-base">
                {quantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                className="w-6 h-6 sm:w-10 sm:h-10 bg-white rounded-md sm:rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-100 transition-colors"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;