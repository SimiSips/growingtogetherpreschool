import React from 'react';
import { TreePine, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-800 to-yellow-500 rounded-full flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400">Growing Together</h3>
                <p className="text-sm text-yellow-400">Pre-School</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nurturing young minds and fostering lifelong learning in a safe, caring environment where every child can grow and thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#teachers" className="text-gray-300 hover:text-white transition-colors">Teachers</a></li>
              <li><a href="#activities" className="text-gray-300 hover:text-white transition-colors">Activities</a></li>
              <li><a href="#register" className="text-gray-300 hover:text-white transition-colors">Register</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Programs</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Toddler Program (18 months - 2 years)</li>
              <li className="text-gray-300">Preschool Program (3 - 4 years)</li>
              <li className="text-gray-300">Pre-K Program (4 - 5 years)</li>
              <li className="text-gray-300">Extended Care Available</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Learning Lane</p>
                  <p className="text-gray-300">Sunshine City, SC 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">info@growingtogetherpreschool.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; {currentYear} Growing Together Pre-School. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;