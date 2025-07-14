import React from 'react';
import { Baby, Users, GraduationCap, Clock, MapPin, BookOpen } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <Baby className="w-8 h-8 text-pink-500" />,
      title: "Babies Program",
      age: "6 months - 2 years",
      description: "A gentle introduction to group activities, basic social skills, and sensory exploration.",
      features: ["Sensory play", "Music & movement", "Basic social skills", "Potty training support"],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Toddlers Program",
      age: "2 - 3 years",
      description: "Structured learning activities that promote cognitive, social, and emotional development.",
      features: ["Early literacy", "Math concepts", "Science exploration", "Art & crafts"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-500" />,
      title: "Grade R Program",
      age: "4 - 6 years",
      description: "Creche readiness program focusing on academic skills and independence.",
      features: ["Reading readiness", "Writing skills", "Problem solving", "School preparation"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "Aftercare Program",
      age: "6 years and above",
      description: "Aftercare program for children aged 6 years and above, providing a safe and nurturing environment for children to continue their learning journey.",
      features: ["Reading readiness", "Writing skills", "Problem solving", "School preparation"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-yellow-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Age-appropriate programs designed to meet your child's developmental needs and interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <div className="flex items-center justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{program.title}</h3>
                <p className="text-center text-lg opacity-90">{program.age}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Program Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-800 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Half Day</p>
                  <p className="text-gray-600">06:30 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-500 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Full Day</p>
                  <p className="text-gray-600">06:30 AM - 05:30 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Extended Care</p>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;