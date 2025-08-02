import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, MapPin } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
  onAccountClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick, onAccountClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-emerald-600">
              FreshMart
            </div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">Deliver to</span>
            <span className="font-medium">New York, NY</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onAccountClick}
              className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <User className="h-6 w-6" />
              <span>Account</span>
            </button>
            
            <button 
              onClick={onCartClick}
              className="relative flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
              <span className="hidden sm:block">Cart</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">Deliver to New York, NY</span>
              </div>
              <button 
                onClick={onAccountClick}
                className="flex items-center space-x-2 text-gray-600"
              >
                <User className="h-5 w-5" />
                <span>My Account</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;