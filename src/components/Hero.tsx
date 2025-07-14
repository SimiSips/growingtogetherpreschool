import React, { useState, useEffect } from 'react';
import { TreePine, Heart, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Play', 'Learn', 'Grow', 'Discover', 'Create', 'Explore'];
  
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce">
          <Star className="w-6 h-6 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Heart className="w-8 h-8 text-pink-400 opacity-50" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-1000">
          <Sparkles className="w-7 h-7 text-purple-400 opacity-40" />
        </div>
        <div className="absolute top-60 right-40 animate-pulse delay-500">
          <Star className="w-5 h-5 text-green-400 opacity-50" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-800 to-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-2xl">
              <TreePine className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="text-green-800">Growing Together</span>
              <br />
              <span className="text-yellow-600">Pre-School</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">Where Life Is</p>
          </div>

          {/* Typewriter Effect */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-4">
              Where Children{' '}
              <span className="text-green-800 border-r-4 border-green-800 animate-pulse">
                {displayedText}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A nurturing environment where your child's curiosity blooms, creativity flourishes, 
              and lifelong learning begins. Join our family of happy learners!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="bg-gradient-to-r from-green-800 to-green-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:from-green-900 hover:to-green-800 transform hover:scale-105 transition-all duration-300"
            >
              Register Your Child
            </a>
            <a
              href="#about"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;