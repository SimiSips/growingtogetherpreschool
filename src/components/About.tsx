import React from 'react';
import { Heart, Users, TreePine, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Loving Care",
      description: "Every child receives individual attention in a warm, caring environment."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community",
      description: "Building strong relationships between children, families, and educators."
    },
    {
      icon: <TreePine className="w-8 h-8 text-green-500" />,
      title: "Growth",
      description: "Nurturing each child's unique potential through play-based learning."
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Excellence",
      description: "Committed to providing the highest quality early childhood education."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-green-800">Growing Together</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            For over 15 years, Growing Together Pre-School has been a cornerstone of early childhood 
            education in our community. We believe that every child is unique and deserves an 
            environment where they can flourish, learn, and grow at their own pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-800 to-yellow-500 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            To provide a safe, nurturing, and stimulating environment where children can develop 
            socially, emotionally, physically, and intellectually. We prepare children for their 
            educational journey while fostering a lifelong love of learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;