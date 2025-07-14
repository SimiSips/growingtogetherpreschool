import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="text-yellow-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to give your child the best start? Contact us today to schedule a tour or ask questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">45 Coalbrook Rd, South Hills,<br />Johannesburg South, 2197</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">011 613 3674 | 084 508 1852</p>
                  </div>
                </div>

                {/* Principal/Owner */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-lg">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Principal & Owner</h4>
                    <p className="text-gray-600">Joyce Mdlalose</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">growingtogetherecd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 06:30 AM - 5:30 PM<br />
                      Saturday & Sunday: Closed <br />
                      Open during school holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-green-800 to-yellow-500 p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Visit?</h3>
              <p className="mb-6 opacity-90">
                Schedule a tour to see our facilities and meet our amazing teachers. We'd love to show you around!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Tour
                </button>
                <button className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors">
                  Call Now
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="enrollment">Enrollment Inquiry</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="programs">Program Information</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-800 to-green-900 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:from-green-900 hover:to-green-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;