import { Award, BookOpen, Heart, Star } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      name: "Joyce Mdlalose",
      title: "Principal & Owner",
      education: "TBC",
      experience: "15 years experience",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialties: ["Curriculum Development", "Parent Communication", "Special Needs Support"],
      quote: "Every child is a unique flower that needs nurturing to bloom beautifully."
    },
    {
      name: "Elizabeth _________",
      title: "Preschool Teacher",
      education: "TBC",
      experience: "8 years experience",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialties: ["Bilingual Education", "Art & Creativity", "Music & Movement"],
      quote: "Learning happens best when children are having fun and feeling loved."
    },
    {
      name: "Sanele Radebe",
      title: "Teacher's Assistant",
      education: "TBC",
      experience: "6 years experience",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialties: ["Toddler Development", "Sensory Play", "Social Skills"],
      quote: "The smallest steps forward are still steps in the right direction."
    },
    {
      name: "TBC",
      title: "Teacher",
      education: "TBC",
      experience: "6 years experience",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialties: ["Toddler Development", "Sensory Play", "Social Skills"],
      quote: "The smallest steps forward are still steps in the right direction."
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Our <span className="text-green-800">Teachers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our passionate educators bring years of experience and genuine love for teaching young minds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-20 h-20 rounded-full object-cover shadow-lg mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{teacher.name}</h3>
                    <p className="text-lg text-green-800 font-semibold">{teacher.title}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">{teacher.education}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-gray-700">{teacher.experience}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Heart className="w-5 h-5 text-red-500 mr-2" />
                    <span className="font-semibold text-gray-800">Personal Quote:</span>
                  </div>
                  <p className="text-gray-600 italic">"{teacher.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-800 to-yellow-500 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Teachers?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 mb-4 opacity-90" />
              <h4 className="text-xl font-semibold mb-2">Certified & Qualified</h4>
              <p className="opacity-90">All teachers hold degrees in early childhood education</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-12 h-12 mb-4 opacity-90" />
              <h4 className="text-xl font-semibold mb-2">Passionate & Caring</h4>
              <p className="opacity-90">Dedicated to nurturing every child's potential</p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-12 h-12 mb-4 opacity-90" />
              <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
              <p className="opacity-90">Regular professional development and training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;