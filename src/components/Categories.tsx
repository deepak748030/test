import React from 'react';
import { Apple, Milk, Beef, Carrot, Wheat, Coffee } from 'lucide-react';

const categories = [
  { name: 'Fresh Fruits', icon: Apple, color: 'bg-red-100 text-red-600' },
  { name: 'Dairy & Eggs', icon: Milk, color: 'bg-blue-100 text-blue-600' },
  { name: 'Meat & Fish', icon: Beef, color: 'bg-pink-100 text-pink-600' },
  { name: 'Vegetables', icon: Carrot, color: 'bg-green-100 text-green-600' },
  { name: 'Bakery', icon: Wheat, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Beverages', icon: Coffee, color: 'bg-purple-100 text-purple-600' },
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600">
            Find everything you need in our organized categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-20 h-20 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-10 w-10" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;