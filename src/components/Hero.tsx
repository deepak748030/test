import React, { useState } from 'react';
import { MapPin, Clock, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('');

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh groceries
                <span className="text-emerald-600"> delivered</span> in
                <span className="text-orange-500"> 30 minutes</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Get fresh fruits, vegetables, dairy, and more delivered to your doorstep. 
                Fast, fresh, and convenient grocery shopping.
              </p>
            </div>

            {/* Location input */}
            <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-lg max-w-md">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 text-sm sm:text-base text-gray-700 placeholder-gray-400 border-none outline-none"
                />
                <button className="bg-emerald-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm sm:text-base">
                  Find
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">30 min delivery</h3>
                <p className="text-xs sm:text-sm text-gray-600">Lightning fast</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Free delivery</h3>
                <p className="text-xs sm:text-sm text-gray-600">On orders ₹2999+</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">✓</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">100% Fresh</h3>
                <p className="text-xs sm:text-sm text-gray-600">Quality guaranteed</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh groceries"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white p-2 sm:p-4 rounded-xl shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-emerald-600">50%</div>
              <div className="text-xs sm:text-sm text-gray-600">OFF</div>
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white p-2 sm:p-4 rounded-xl shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-orange-600">4.9★</div>
              <div className="text-xs sm:text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;