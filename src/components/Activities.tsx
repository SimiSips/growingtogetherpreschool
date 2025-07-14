import { Palette, Music, Zap, Leaf, BookOpen, Building } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: "Arts & Crafts",
      description: "Creative expression through painting, drawing, and hands-on crafts",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Music className="w-8 h-8 text-blue-500" />,
      title: "Music & Movement",
      description: "Dancing, singing, and rhythm activities to develop coordination",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "STEM Exploration",
      description: "Simple science experiments and building activities",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Nature Studies",
      description: "Outdoor exploration and learning about plants and animals",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      title: "Story Time",
      description: "Daily reading sessions to develop language and imagination",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Building className="w-8 h-8 text-red-500" />,
      title: "Block Building",
      description: "Construction play to develop spatial awareness and problem-solving",
      color: "from-red-500 to-pink-500"
    }
  ];

  const photos = [
    {
      src: "https://images.pexels.com/photos/8613080/pexels-photo-8613080.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "Children playing with blocks",
      caption: "Creative Building Time"
    },
    {
      src: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "Arts and crafts activity",
      caption: "Arts & Crafts Fun"
    },
    {
      src: "https://images.pexels.com/photos/8613109/pexels-photo-8613109.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "Outdoor learning",
      caption: "Nature Exploration"
    },
    {
      src: "https://images.pexels.com/photos/8613099/pexels-photo-8613099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      alt: "Reading time",
      caption: "Story Time Circle"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fun <span className="text-yellow-600">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Engaging activities designed to spark curiosity and foster development in every child
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`bg-gradient-to-r ${activity.color} p-6 text-white group-hover:scale-105 transition-transform duration-300`}>
                <div className="flex items-center justify-center mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-center">{activity.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed text-center">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            See Our Children in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-center font-semibold text-gray-800">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Daily Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-2">Morning (06:30 AM - 11:00 AM)</h4>
              <p className="text-gray-600">Circle time, learning activities, and free play</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <h4 className="font-semibold text-yellow-700 mb-2">Midday (11:00 AM - 2:00 PM)</h4>
              <p className="text-gray-600">Outdoor play, lunch, and nap time</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h4 className="font-semibold text-blue-700 mb-2">Afternoon (2:00 PM - 5:30 PM)</h4>
              <p className="text-gray-600">Arts & crafts, snack time, and structured activities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;