import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Palette, Camera, Mail, Star, Heart, Award, Phone } from 'lucide-react';

const screens = [
  {
    id: 'hero',
    title: 'Sophia Martinez',
    subtitle: 'Professional Makeup Artist',
    content: 'Transforming beauty dreams into reality with artistry and passion',
    bgColor: 'bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600',
    icon: <Sparkles className="w-20 h-20 text-white mb-4" />,
    accentText: '5+ Years Experience',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c179e675?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 'services',
    title: 'My Services',
    subtitle: 'Specializing In',
    content: 'Bridal • Editorial • Special Events • Photoshoots • Glam Makeovers',
    bgColor: 'bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500',
    icon: <Palette className="w-20 h-20 text-white mb-4" />,
    accentText: 'All Occasions Covered',
    images: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop'
    ]
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Recent Work',
    content: 'Award-winning makeup artistry featured in top fashion magazines and celebrity events',
    bgColor: 'bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600',
    icon: <Camera className="w-20 h-20 text-white mb-4" />,
    accentText: '500+ Happy Clients',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=400&fit=crop',
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop',
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=400&fit=crop'
    ]
  },
  {
    id: 'testimonials',
    title: 'What Clients Say',
    subtitle: 'Testimonials',
    content: 'Hear from our amazing clients about their transformative experiences',
    bgColor: 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600',
    icon: <Star className="w-20 h-20 text-white mb-4" />,
    accentText: '5 Star Rating'
  },
  {
    id: 'contact',
    title: 'Book Your Session',
    subtitle: 'Let\'s Create Magic',
    content: 'Ready to look and feel amazing? Contact me to schedule your personalized makeup session',
    bgColor: 'bg-gradient-to-br from-fuchsia-500 via-rose-500 to-pink-600',
    icon: <Mail className="w-20 h-20 text-white mb-4" />,
    accentText: 'Available 7 Days'
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    occasion: "Bridal Makeup",
    text: "Sophia made me feel like a goddess on my wedding day. Her attention to detail is unmatched! I've never felt more beautiful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Jessica M.",
    occasion: "Editorial Shoot",
    text: "Working with Sophia was incredible. She understood exactly what I wanted and exceeded all expectations. Pure artistry!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Maria L.",
    occasion: "Special Event",
    text: "Sophia's work is phenomenal. She made me feel confident and radiant for my anniversary celebration. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Amanda R.",
    occasion: "Photoshoot",
    text: "The most talented makeup artist I've worked with. Sophia brings out your natural beauty while creating stunning looks.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face"
  }
];

const floatingElements = [
  { icon: <Heart className="w-4 h-4" />, delay: '0s' },
  { icon: <Sparkles className="w-3 h-3" />, delay: '2s' },
  { icon: <Star className="w-3 h-3" />, delay: '4s' },
  { icon: <Award className="w-4 h-4" />, delay: '6s' }
];

export default function MakeupArtistPortfolio() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextScreen = () => {
    if (currentScreen < screens.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentScreen(currentScreen + 1);
        setIsAnimating(false);
      }, 400);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentScreen(currentScreen - 1);
        setIsAnimating(false);
      }, 400);
    }
  };

  const goToScreen = (index) => {
    if (index !== currentScreen && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentScreen(index);
        setIsAnimating(false);
      }, 400);
    }
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (currentScreen === 3) { // testimonials screen
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextScreen();
      if (e.key === 'ArrowLeft') prevScreen();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentScreen, isAnimating]);

  // Mouse wheel navigation
  useEffect(() => {
    let scrollTimeout;
    const handleWheel = (e) => {
      e.preventDefault();
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          nextScreen();
        } else {
          prevScreen();
        }
      }, 100);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentScreen, isAnimating]);

  const currentScreenData = screens[currentScreen];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderScreenContent = () => {
    switch (currentScreen) {
      case 0: // Hero
        return (
          <div className="text-center text-white px-8 max-w-4xl z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl animate-bounce-slow">
                  <img 
                    src={currentScreenData.image} 
                    alt="Sophia Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
                  {currentScreenData.icon}
                </div>
              </div>
              <div className="text-left md:text-left">
                <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
                  {currentScreenData.subtitle}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
                  {currentScreenData.title}
                </h1>
                <p className="text-lg md:text-xl leading-relaxed font-light mb-6 animate-fade-in-up-delay max-w-lg">
                  {currentScreenData.content}
                </p>
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up-delay-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  {currentScreenData.accentText}
                </div>
              </div>
            </div>
          </div>
        );

      case 1: // Services
        return (
          <div className="text-center text-white px-8 max-w-6xl z-10">
            <div className="mb-6 animate-bounce-slow">
              {currentScreenData.icon}
            </div>
            <div className="mb-8">
              <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
                {currentScreenData.subtitle}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
                {currentScreenData.title}
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed font-light mb-6 animate-fade-in-up-delay max-w-3xl mx-auto">
                {currentScreenData.content}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up-delay-2">
              {currentScreenData.images?.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="w-full h-48 rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-300">
                    <img 
                      src={image} 
                      alt={`Service ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up-delay-3">
              <Sparkles className="w-4 h-4 mr-2" />
              {currentScreenData.accentText}
            </div>
          </div>
        );

      case 2: // Portfolio
        return (
          <div className="text-center text-white px-8 max-w-6xl z-10">
            <div className="mb-6 animate-bounce-slow">
              {currentScreenData.icon}
            </div>
            <div className="mb-8">
              <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
                {currentScreenData.subtitle}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
                {currentScreenData.title}
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed font-light mb-6 animate-fade-in-up-delay max-w-3xl mx-auto">
                {currentScreenData.content}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up-delay-2">
              {currentScreenData.images?.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="w-full h-60 rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-300">
                    <img 
                      src={image} 
                      alt={`Portfolio ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">Look {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up-delay-3">
              <Sparkles className="w-4 h-4 mr-2" />
              {currentScreenData.accentText}
            </div>
          </div>
        );

      case 3: // Testimonials
        const currentTestimonialData = testimonials[currentTestimonial];
        return (
          <div className="text-center text-white px-8 max-w-4xl z-10">
            <div className="mb-6 animate-bounce-slow">
              {currentScreenData.icon}
            </div>
            <div className="mb-8">
              <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
                {currentScreenData.subtitle}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
                {currentScreenData.title}
              </h1>
              <p className="text-xl leading-relaxed font-light mb-8 animate-fade-in-up-delay max-w-3xl mx-auto">
                {currentScreenData.content}
              </p>
            </div>
            
            {/* Testimonial Carousel */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 animate-fade-in-up-delay-2">
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={currentTestimonialData.image} 
                    alt={currentTestimonialData.name}
                    className="w-16 h-16 rounded-full border-2 border-white/30"
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{currentTestimonialData.name}</h3>
                    <p className="text-white/80 text-sm">{currentTestimonialData.occasion}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(currentTestimonialData.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <blockquote className="text-lg md:text-xl italic leading-relaxed">
                "{currentTestimonialData.text}"
              </blockquote>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up-delay-3">
              <Sparkles className="w-4 h-4 mr-2" />
              {currentScreenData.accentText}
            </div>
          </div>
        );

      default: // Contact
        return (
          <div className="text-center text-white px-8 max-w-4xl z-10">
            <div className="mb-6 animate-bounce-slow">
              {currentScreenData.icon}
            </div>
            
            <div className="mb-4">
              <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
                {currentScreenData.subtitle}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
                {currentScreenData.title}
              </h1>
            </div>

            <p className="text-xl md:text-2xl leading-relaxed font-light mb-6 animate-fade-in-up-delay max-w-3xl mx-auto">
              {currentScreenData.content}
            </p>

            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up-delay-2 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              {currentScreenData.accentText}
            </div>

            <div className="space-y-4 animate-fade-in-up-delay-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: (555) 123-4567
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </button>
              </div>
              <div className="text-sm opacity-80">
                📍 Available in Los Angeles & Orange County
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-serif">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-float text-white/20"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: element.delay,
              animationDuration: '6s'
            }}
          >
            {element.icon}
          </div>
        ))}
      </div>

      {/* Main Screen Content */}
      <div 
        className={`
          ${currentScreenData.bgColor} 
          w-full h-full flex items-center justify-center relative
          transition-all duration-700 ease-in-out
          ${isAnimating ? 'scale-105 opacity-40' : 'scale-100 opacity-100'}
        `}
      >
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>

        {renderScreenContent()}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
        {/* Previous Button */}
        <button
          onClick={prevScreen}
          disabled={currentScreen === 0 || isAnimating}
          className={`
            pointer-events-auto group
            w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/30
            flex items-center justify-center
            transition-all duration-300 hover:bg-white/35 hover:scale-110
            ${currentScreen === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'}
          `}
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextScreen}
          disabled={currentScreen === screens.length - 1 || isAnimating}
          className={`
            pointer-events-auto group
            w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/30
            flex items-center justify-center
            transition-all duration-300 hover:bg-white/35 hover:scale-110
            ${currentScreen === screens.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'}
          `}
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Screen Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {screens.map((screen, index) => (
          <button
            key={index}
            onClick={() => goToScreen(index)}
            className={`
              relative group transition-all duration-300 hover:scale-125
              ${index === currentScreen ? 'scale-125' : ''}
            `}
          >
            <div className={`
              w-4 h-4 rounded-full transition-all duration-300
              ${index === currentScreen 
                ? 'bg-white shadow-lg ring-4 ring-white/30' 
                : 'bg-white/60 hover:bg-white/80'
              }
            `} />
            {/* Screen Labels */}
            <div className={`
              absolute -top-8 left-1/2 transform -translate-x-1/2 
              text-xs text-white/80 font-medium whitespace-nowrap
              transition-all duration-300
              ${index === currentScreen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            `}>
              {screen.subtitle}
            </div>
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-white to-pink-200 transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
        />
      </div>

      {/* Brand Badge */}
      <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium border border-white/30">
        ✨ Makeup Artistry
      </div>

      {/* Social Links */}
      <div className="absolute top-6 right-6 flex space-x-3">
        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30">
          📱
        </button>
        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30">
          📷
        </button>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 right-6 text-white/60 text-xs font-light">
        Use mouse wheel or arrow keys to navigate
      </div>
    </div>
  );
}