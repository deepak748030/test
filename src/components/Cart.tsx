import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Product } from './ProductCard';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: { [key: number]: number };
  products: Product[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  products, 
  onUpdateQuantity 
}) => {
  const cartProducts = products.filter(product => items[product.id] > 0);
  const totalItems = Object.values(items).reduce((sum, quantity) => sum + quantity, 0);
  const totalPrice = cartProducts.reduce(
    (sum, product) => sum + product.price * items[product.id], 
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <ShoppingBag className="h-6 w-6 mr-2" />
              Shopping Cart ({totalItems})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartProducts.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartProducts.map((product) => (
                  <div key={product.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.unit}</p>
                        <p className="text-lg font-semibold text-emerald-600">
                          ₹{product.price}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(product.id, items[product.id] - 1)}
                          className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold text-emerald-600 w-8 text-center">
                          {items[product.id]}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, items[product.id] + 1)}
                          className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartProducts.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-emerald-600">₹{totalPrice}</span>
              </div>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors">
                Proceed to Checkout
              </button>
              <p className="text-center text-sm text-gray-500">
                Free delivery on orders over ₹2999
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;