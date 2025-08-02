import React, { useState } from 'react';
import { X, User, MapPin, CreditCard, Bell, Shield, HelpCircle, LogOut, Edit, Plus } from 'lucide-react';

interface AccountPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountPage: React.FC<AccountPageProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('profile');

  if (!isOpen) return null;

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'help', label: 'Help', icon: HelpCircle },
  ];

  const addresses = [
    { id: 1, type: 'Home', address: '123 Main St, New York, NY 10001', isDefault: true },
    { id: 2, type: 'Work', address: '456 Business Ave, New York, NY 10002', isDefault: false },
  ];

  const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/25', isDefault: true },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '08/26', isDefault: false },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-gray-900">My Account</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors lg:hidden"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 capitalize">
                    {activeTab}
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors hidden lg:block"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                        <User className="h-12 w-12 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">John Doe</h4>
                        <p className="text-gray-600">john.doe@example.com</p>
                        <button className="mt-2 text-emerald-600 hover:text-emerald-700 font-medium">
                          Change Photo
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                      Save Changes
                    </button>
                  </div>
                )}

                {/* Addresses Tab */}
                {activeTab === 'addresses' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600">Manage your delivery addresses</p>
                      <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center space-x-2">
                        <Plus className="h-4 w-4" />
                        <span>Add Address</span>
                      </button>
                    </div>

                    <div className="space-y-4">
                      {addresses.map((address) => (
                        <div key={address.id} className="bg-gray-50 p-6 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className="font-semibold text-gray-900">{address.type}</h4>
                                {address.isDefault && (
                                  <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded text-xs font-medium">
                                    Default
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-600">{address.address}</p>
                            </div>
                            <button className="text-emerald-600 hover:text-emerald-700">
                              <Edit className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Payment Tab */}
                {activeTab === 'payment' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600">Manage your payment methods</p>
                      <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center space-x-2">
                        <Plus className="h-4 w-4" />
                        <span>Add Card</span>
                      </button>
                    </div>

                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="bg-gray-50 p-6 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  {method.type.slice(0, 4).toUpperCase()}
                                </span>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">
                                  •••• •••• •••• {method.last4}
                                </p>
                                <p className="text-gray-600 text-sm">Expires {method.expiry}</p>
                              </div>
                              {method.isDefault && (
                                <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded text-xs font-medium">
                                  Default
                                </span>
                              )}
                            </div>
                            <button className="text-emerald-600 hover:text-emerald-700">
                              <Edit className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other tabs content */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <p className="text-gray-600">Manage your notification preferences</p>
                    <div className="space-y-4">
                      {[
                        'Order updates',
                        'Promotional offers',
                        'New product alerts',
                        'Delivery notifications',
                      ].map((item) => (
                        <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <span className="text-gray-900">{item}</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <p className="text-gray-600">Manage your account security</p>
                    <div className="space-y-4">
                      <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <h4 className="font-semibold text-gray-900 mb-1">Change Password</h4>
                        <p className="text-gray-600 text-sm">Update your account password</p>
                      </button>
                      <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <h4 className="font-semibold text-gray-900 mb-1">Two-Factor Authentication</h4>
                        <p className="text-gray-600 text-sm">Add an extra layer of security</p>
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'help' && (
                  <div className="space-y-6">
                    <p className="text-gray-600">Get help and support</p>
                    <div className="space-y-4">
                      {[
                        'Contact Support',
                        'FAQ',
                        'Terms of Service',
                        'Privacy Policy',
                      ].map((item) => (
                        <button key={item} className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="text-gray-900">{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;