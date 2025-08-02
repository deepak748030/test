import React from 'react';
import { MapPin, ShoppingCart, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: 'Select Location',
    description: 'Enter your delivery address to see available products in your area',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: ShoppingCart,
    title: 'Add to Cart',
    description: 'Browse categories and add fresh products to your shopping cart',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your groceries delivered to your doorstep in 30 minutes',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: CheckCircle,
    title: 'Enjoy Fresh',
    description: 'Enjoy fresh, quality groceries from the comfort of your home',
    color: 'bg-green-100 text-green-600',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get fresh groceries delivered in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto rounded-full ${step.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;