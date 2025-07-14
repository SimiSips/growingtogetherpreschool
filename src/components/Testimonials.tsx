import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Williams",
      role: "Mother of Emma (Age 4)",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      rating: 5,
      text: "Growing Together has been amazing for Emma! She's learned so much and comes home excited to share her day. The teachers are incredibly caring and professional.",
      highlight: "Emma loves going to school every day!"
    },
    {
      name: "Michael Chen",
      role: "Father of Alex (Age 3)",
      image: "https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      rating: 5,
      text: "The individualized attention Alex receives is remarkable. His confidence has grown tremendously, and he's developed excellent social skills. Highly recommend!",
      highlight: "Alex's confidence has grown tremendously"
    },
    {
      name: "Jessica Rodriguez",
      role: "Mother of Sofia (Age 2)",
      image: "https://images.pexels.com/photos/1181609/pexels-photo-1181609.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      rating: 5,
      text: "As a working parent, I appreciate the flexibility and communication from the staff. Sofia is thriving in their toddler program and loves her teachers.",
      highlight: "Sofia is thriving in their toddler program"
    },
    {
      name: "David Thompson",
      role: "Father of Lucas (Age 5)",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      rating: 5,
      text: "The Pre-K program excellently prepared Lucas for creche. He's reading, writing, and most importantly, loves learning. Thank you, Growing Together!",
      highlight: "Excellently prepared Lucas for creche"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Qualified Teachers" },
    { number: "98%", label: "Parent Satisfaction" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What <span className="text-green-800">Parents</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the families who trust us with their children's education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-green-800 opacity-50 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed mb-4 pl-6">{testimonial.text}</p>
              </div>

              <div className="bg-gradient-to-r from-green-800 to-yellow-500 text-white p-4 rounded-xl">
                <p className="font-semibold text-center">"{testimonial.highlight}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;