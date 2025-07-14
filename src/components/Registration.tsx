import React, { useState } from 'react';
import { Send, CheckCircle, User, Baby, Calendar, Phone, Mail, MapPin } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childAge: '',
    childBirthdate: '',
    program: '',
    schedule: '',
    startDate: '',
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalInfo: '',
    additionalNotes: ''
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
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 p-8 rounded-3xl shadow-lg">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-700 mb-4">Registration Submitted!</h3>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your interest in Growing Together Pre-School! We've received your registration 
                and will contact you within 24 hours to schedule a visit and discuss enrollment.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                Submit Another Registration
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Register Your <span className="text-green-800">Child</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing family! Fill out the form below to begin the enrollment process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Parent Information */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <User className="w-6 h-6 text-green-800 mr-2" />
                  Parent Information
                </h3>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Parent/Guardian Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>

              {/* Child Information */}
              <div className="md:col-span-2 mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Baby className="w-6 h-6 text-yellow-500 mr-2" />
                  Child Information
                </h3>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Child's Name *</label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Child's Age *</label>
                <select
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                >
                  <option value="">Select Age</option>
                  <option value="18-24 months">18-24 months</option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">3 years</option>
                  <option value="4 years">4 years</option>
                  <option value="5 years">5 years</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Birth Date *</label>
                <input
                  type="date"
                  name="childBirthdate"
                  value={formData.childBirthdate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Program *</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                >
                  <option value="">Select Program</option>
                  <option value="toddler">Toddler Program (18 months - 2 years)</option>
                  <option value="preschool">Preschool Program (3 - 4 years)</option>
                  <option value="pre-k">Pre-K Program (4 - 5 years)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Schedule Preference *</label>
                <select
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                >
                  <option value="">Select Schedule</option>
                  <option value="half-day">Half Day (9:00 AM - 12:00 PM)</option>
                  <option value="full-day">Full Day (7:00 AM - 6:00 PM)</option>
                  <option value="extended">Extended Care (flexible hours)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>

              {/* Emergency Contact */}
              <div className="md:col-span-2 mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Phone className="w-6 h-6 text-red-500 mr-2" />
                  Emergency Contact
                </h3>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Emergency Contact Name *</label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Emergency Contact Phone *</label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>

              {/* Additional Information */}
              <div className="md:col-span-2 mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Additional Information</h3>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Medical Information / Allergies</label>
                <textarea
                  name="medicalInfo"
                  value={formData.medicalInfo}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  placeholder="Please list any medical conditions, allergies, or special needs..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              <div className="md:col-span-2 mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-800 to-green-900 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:from-green-900 hover:to-green-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Registration
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;