import React, { useState } from 'react';
import { X, Star, Plus, Minus, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product } from './ProductCard';

interface ProductDetailsProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  isOpen,
  onClose,
  quantity,
  onAddToCart,
  onUpdateQuantity,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!isOpen || !product) return null;

  const productImages = [
    product.image,
    product.image,
    product.image,
  ];

  const features = [
    { icon: Truck, text: 'Free delivery on orders ₹2999+' },
    { icon: Shield, text: '100% quality guarantee' },
    { icon: RotateCcw, text: 'Easy returns within 7 days' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute inset-0 flex items-center justify-center p-0 sm:p-4 z-50">
        <div className="bg-white sm:rounded-2xl max-w-4xl w-full h-full sm:max-h-[90vh] overflow-y-auto scrollbar-hide relative">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-50">
            <h2 className="text-xl font-semibold text-gray-900">Product Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative bg-gray-50 rounded-2xl overflow-hidden z-10">
                  <img
                    src={productImages[selectedImage]}
                    alt={product.name}
                    className="w-full h-64 sm:h-96 object-cover"
                  />
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium z-20">
                      {product.discount}% OFF
                    </div>
                  )}
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow z-20"
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                  </button>
                </div>
                
                <div className="flex space-x-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-emerald-500' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  <p className="text-gray-600">{product.unit}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-base sm:text-lg font-medium text-gray-700 ml-2">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base text-gray-500">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl sm:text-2xl text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-lg text-sm font-medium">
                      Save ₹{(product.originalPrice! - product.price)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Description</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Fresh, high-quality {product.name.toLowerCase()} sourced from trusted local farms. 
                    Perfect for your daily nutrition needs with guaranteed freshness and taste. 
                    Rich in vitamins and minerals, this premium product is carefully selected to ensure 
                    the best quality reaches your table.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Why Choose This Product</h3>
                  <div className="space-y-2">
                    {features.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <IconComponent className="h-5 w-5 text-emerald-600" />
                          <span className="text-sm sm:text-base text-gray-600">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="space-y-4">
                  {quantity === 0 ? (
                    <button
                      onClick={() => onAddToCart(product)}
                      className="w-full bg-emerald-600 text-white py-3 sm:py-4 px-6 rounded-xl font-medium text-base sm:text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Plus className="h-6 w-6" />
                      <span>Add to Cart</span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-emerald-50 rounded-xl p-3">
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-100 transition-colors"
                      >
                        <Minus className="h-5 w-5" />
                      </button>
                      <span className="font-semibold text-emerald-600 text-lg sm:text-xl px-4 sm:px-6">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-100 transition-colors"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                  
                  <button className="w-full border-2 border-gray-300 text-gray-700 py-2 sm:py-3 px-6 rounded-xl font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors flex items-center justify-center space-x-2">
                    <Share2 className="h-5 w-5" />
                    <span>Share Product</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;