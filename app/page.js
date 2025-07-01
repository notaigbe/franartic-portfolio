"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Palette,
  Camera,
  Mail,
  Star,
  Heart,
  Award,
  Phone,
  User,
  Baby,
  BadgeCheck,
  PartyPopper
} from "lucide-react";
import Image from "next/image";
import FloatingElements from "./components/FloatingElements";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import NavigationControls from "./components/NavigationControls";
import ScreenIndicators from "./components/ScreenIndicators";
import ScreenContent from "./components/ScreenContent";
const screens = [
  {
    id: "hero",
    title: "Francisca Otaigbe",
    subtitle: "Professional Makeup Artist",
    content: "From brush to screen: Crafting characters, telling stories",
    bgColor: "bg-gradient-to-br from-slate-800 via-gray-800 to-neutral-900",
    icon: (
      <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-amber-400 mb-4" />
    ),
    accentText: "Franartic",
    image: "/assets/img/me.jpg",
  },
  {
    id: "about",
    title: "About Me",
    subtitle: "Francisca Otaigbe",
    content:
      "I’m a seasoned beauty and special effects makeup artist with over seven years of professional experience and two AMVCA nominations. From film sets to TV screens, I have carved a space for myself as a transformative storyteller — one brush stroke, one prosthetic piece at a time.\n\nAs a freelance artist, I’ve worked across multiple productions and currently lead a talented team of makeup artists and hairstylists on film and television projects. My artistry is rooted in a deep love for storytelling, where every detail becomes a living chapter in a character’s journey.\n\nDriven by the power of transformation, I breathe life into scripts — whether it’s subtle glam or full-blown gore. My mission is always the same: to bring the director’s vision to life, to make audiences believe, feel, and remember.\n\nI don’t just do makeup, I build identities.",
    bgColor: "bg-gradient-to-br from-blue-900 via-pink-900 to-red-900",
    icon: <User className="w-16 h-16 md:w-20 md:h-20 text-amber-300 mb-4" />,
    accentText: "All Occasions Covered",
    images: ["/assets/img/about.jpg"],
  },
  {
    id: "services",
    title: "My Services",
    subtitle: "Specializing In",
    content:
      "Bridal • Editorial • Special Events • Photoshoots • Glam Makeovers",
    bgColor: "bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900",
    icon: <BadgeCheck className="w-16 h-16 md:w-20 md:h-20 text-amber-300 mb-4" />,
    accentText: "All Occasions Covered",
    images: [
      "/assets/img/portfolio/portfolio-1.png",
      "/assets/img/portfolio/portfolio-3.png",
      "/assets/img/portfolio/portfolio-4.png",
    ],
  },
  {
    id: "featured",
    title: "Featured Film Projects",
    subtitle: "Specializing In",
    content:
      "Bridal • Editorial • Special Events • Photoshoots • Glam Makeovers",
    bgColor: "bg-gradient-to-br from-amber-900 via-sky-800 to-rose-900",
    icon: <PartyPopper className="w-16 h-16 md:w-20 md:h-20 text-amber-300 mb-4" />,
    accentText: "All Occasions Covered",
    images: [
      "/assets/img/featured/featured-1.png",
      "/assets/img/featured/featured-2.png",
      "/assets/img/featured/featured-3.png",
      "/assets/img/featured/featured-4.png",
      "/assets/img/featured/featured-5.png",
      "/assets/img/featured/featured-6.png",
      "/assets/img/featured/featured-7.png",
      "/assets/img/featured/featured-8.png",
      "/assets/img/featured/featured-9.png",
      "/assets/img/featured/featured-10.png",
    ],
  },
  {
    id: "other-projects",
    title: "Other Projects",
    subtitle: "Specializing In",
    content:
      "Bridal • Editorial • Special Events • Photoshoots • Glam Makeovers",
    bgColor: "bg-gradient-to-br from-gray-900 via-amber-800 to-slate-900",
    icon: <Palette className="w-16 h-16 md:w-20 md:h-20 text-amber-300 mb-4" />,
    accentText: "All Occasions Covered",
    images: [
      "/assets/img/portfolio/portfolio-1.png",
      "/assets/img/portfolio/portfolio-3.png",
      "/assets/img/portfolio/portfolio-4.png",
    ],
  },

  {
    id: "portfolio",
    title: "Portfolio",
    subtitle: "Recent Work",
    content:
      "Award-winning makeup artistry featured in top fashion magazines and celebrity events",
    bgColor: "bg-gradient-to-br from-stone-800 via-neutral-800 to-gray-900",
    icon: <Camera className="w-16 h-16 md:w-20 md:h-20 text-stone-300 mb-4" />,
    accentText: "500+ Happy Clients",
    images: [
      "/assets/img/portfolio/portfolio-1.png",
      "/assets/img/portfolio/portfolio-2.jpeg",
      "/assets/img/portfolio/portfolio-3.png",
      "/assets/img/portfolio/portfolio-4.png",
    ],
  },
  {
    id: "testimonials",
    title: "What Clients Say",
    subtitle: "Testimonials",
    content:
      '"Sophia made me feel like a goddess on my wedding day. Her attention to detail is unmatched!" - Sarah K.',
    bgColor: "bg-gradient-to-br from-rose-900 via-pink-900 to-red-900",
    icon: <Star className="w-16 h-16 md:w-20 md:h-20 text-rose-300 mb-4" />,
    accentText: "5 Star Rating",
  },
  {
    id: "contact",
    title: "Get in touch",
    subtitle: "Let's Create Magic",
    content:
      "Ready to look and feel amazing? Contact me to schedule your personalized makeup session",
    bgColor: "bg-gradient-to-br from-neutral-600 via-teal-900 to-slate-900",
    icon: <Mail className="w-16 h-16 md:w-20 md:h-20 text-neutral-300 mb-4" />,
    accentText: "Available 7 Days",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    occasion: "Bridal Makeup",
    text: "Sophia made me feel like a goddess on my wedding day. Her attention to detail is unmatched! I've never felt more beautiful.",
    rating: 5,
    image: "/assets/img/testimonials/testimonials-1.jpg",
  },
  {
    id: 2,
    name: "Jessica M.",
    occasion: "Editorial Shoot",
    text: "Working with Sophia was incredible. She understood exactly what I wanted and exceeded all expectations. Pure artistry!",
    rating: 5,
    image: "/assets/img/testimonials/testimonials-2.jpg",
  },
  {
    id: 3,
    name: "Maria L.",
    occasion: "Special Event",
    text: "Sophia's work is phenomenal. She made me feel confident and radiant for my anniversary celebration. Highly recommend!",
    rating: 5,
    image: "/assets/img/testimonials/testimonials-3.jpg",
  },
  {
    id: 4,
    name: "Amanda R.",
    occasion: "Photoshoot",
    text: "The most talented makeup artist I've worked with. Sophia brings out your natural beauty while creating stunning looks.",
    rating: 5,
    image: "/assets/img/testimonials/testimonials-4.jpg",
  },
];

const floatingElements = [
  { icon: <Heart className="w-4 h-4" />, delay: "0s" },
  { icon: <Sparkles className="w-3 h-3" />, delay: "2s" },
  { icon: <Star className="w-3 h-3" />, delay: "4s" },
  { icon: <Award className="w-4 h-4" />, delay: "6s" },
];

export default function MakeupArtistPortfolio() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

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
    if (currentScreen === 3) {
      // testimonials screen
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") nextScreen();
      if (e.key === "ArrowLeft") prevScreen();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentScreen, isAnimating]);

    useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const interval = setInterval(() => {
      if (!isDragging.current) {
        scrollEl.scrollLeft += 1;
        // Reset to start for infinite loop effect
        if (scrollEl.scrollLeft >= scrollEl.scrollWidth - scrollEl.clientWidth) {
          scrollEl.scrollLeft = 0;
        }
      }
    }, 20); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  const currentScreenData = screens[currentScreen];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };


  // Drag handlers for scrollable gallery
  const dragHandlers = {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseUp,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };

  // Render main content
  // For testimonials, use ScreenContent, for others, keep content here for now

  return (
    <div className="relative w-full min-h-screen overflow-auto hide-scrollbar font-serif">
      {/* Floating Background Elements */}
      <FloatingElements floatingElements={floatingElements} />

      {/* Main Screen Content */}
      <div
        className={`
          ${currentScreenData.bgColor} 
          w-full min-h-screen flex items-center justify-center relative
          transition-all duration-700 ease-in-out
          ${isAnimating ? "scale-105 opacity-40" : "scale-100 opacity-100"}
        `}
      >
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="overflow-y-auto hide-scrollbar max-h-[calc(100vh-8rem)]">
          {/* Render testimonials with ScreenContent, others inline */}
          {currentScreen === 6 ? (
            <ScreenContent
              currentScreen={currentScreen}
              currentScreenData={currentScreenData}
              testimonials={testimonials}
              currentTestimonial={currentTestimonial}
              nextTestimonial={nextTestimonial}
              prevTestimonial={prevTestimonial}
              scrollRef={scrollRef}
              dragHandlers={dragHandlers}
            />
          ) : (
            // Inline rendering for all other screens
            <>
              {currentScreen === 0 && (
                <div className="text-center text-white px-8 max-w-4xl z-10 p-16">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                    <div className="relative">
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl animate-bounce-slow">
                        <Image
                          src={currentScreenData.image}
                          alt="Francisca Otaigbe"
                          className="w-full h-full object-cover"
                          width={400}
                          height={600}
                          style={{ width: "100%", height: "100%" }}
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
              )}
              {currentScreen === 1 && (
                <div className="text-white px-8 max-w-6xl mx-auto z-10">
                  <div className="text-center mb-6 animate-bounce-slow">
                    {currentScreenData.icon}
                  </div>
                  <div className="text-center mb-8">
                    <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
                      {currentScreenData.subtitle}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
                      {currentScreenData.title}
                    </h1>
                  </div>
                  <div className="flex flex-col md:flex-row items-start gap-8 animate-fade-in-up-delay">
                    <div className="w-full md:w-1/4 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={currentScreenData.images?.[0]}
                        alt="About"
                        className="w-full h-auto object-cover"
                        width={400}
                        height={600}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="w-full md:w-3/4 text-lg md:text-xl leading-relaxed font-light whitespace-pre-line">
                      {currentScreenData.content}
                    </div>
                  </div>
                  <div className="flex justify-center mt-10 animate-fade-in-up-delay-3">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium">
                      <Sparkles className="w-4 h-4 mr-2" />
                      {currentScreenData.accentText}
                    </div>
                  </div>
                </div>
              )}
              {currentScreen === 2 && (
                <div className="text-center text-white px-8 max-w-6xl z-10 p-2">
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
                          <Image
                            src={image}
                            alt={`Service ${index + 1}`}
                            className="w-full h-full object-cover"
                            width={400}
                            height={400}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        SFX Makeup
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up-delay-3">
                    <Sparkles className="w-4 h-4 mr-2" />
                    {currentScreenData.accentText}
                  </div>
                </div>
              )}
              {currentScreen === 3 && (
                <div className="text-center text-white px-8 max-w-6xl z-10 p-2">
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
                  <div
                    className="overflow-x-auto cursor-grab active:cursor-grabbing hide-scrollbar"
                    ref={scrollRef}
                    {...dragHandlers}
                  >
                    <div className="flex w-max auto-scroll-x auto-scroll-paused space-x-4">
                      {currentScreenData.images
                        .concat(currentScreenData.images)
                        .map((img, index) => (
                          <Image
                            key={index}
                            src={img}
                            alt={`Featured ${index + 1}`}
                            className="w-60 h-80 object-cover rounded-xl shadow-lg flex-shrink-0"
                            width={254}
                            height={328}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              )}
              {currentScreen === 4 && (
                <div className="text-center text-white px-8 max-w-6xl z-10 p-2">
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
                    <div className="grid md:grid-cols-5 gap-6 text-left text-white font-light text-sm sm:text-base animate-fade-in-up-delay">
                      {/* Blockbusters */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Blockbusters</h3>
                        <ul className="space-y-1">
                          <li>• Accroche (2022)</li>
                          <li>• Citation (2020)</li>
                          <li>• Swallow (2021)</li>
                          <li>• Nimbe (2018)</li>
                          <li>• The Money Wives of Patrick</li>
                          <li>• Deja Vu</li>
                          <li>• Under</li>
                        </ul>
                      </div>
                      {/* Series */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Series</h3>
                        <ul className="space-y-1">
                          <li>• MTV Shuga 6 (2017)</li>
                          <li>• MTV Shuga Naija 4 (2019)</li>
                          <li>• Cross Roads (2017)</li>
                          <li>• Streets</li>
                          <li>• Njem</li>
                          <li>• The Quest</li>
                        </ul>
                      </div>
                      {/* TV Movies */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">TV Movies</h3>
                        <ul className="space-y-1">
                          <li>• One Too Many (2021)</li>
                          <li>• Celebrity Girlfriend (2020)</li>
                          <li>• Picture Perfect (2017)</li>
                          <li>• Home Invasion (2017)</li>
                          <li>• A Perfect Christmas (2017)</li>
                          <li>• Don’t Leave Me (2017)</li>
                          <li>• Uglybeauty</li>
                        </ul>
                      </div>
                      {/* TV Commercials */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">TV Commercials</h3>
                        <ul className="space-y-1">
                          <li>• Mtv Shuga PSA</li>
                          <li>• Moniepoint</li>
                          <li>• 9mobile (Cash Token)</li>
                          <li>• Traction</li>
                          <li>• Kwiksell</li>
                          <li>• Softcom</li>
                          <li>• Kilimanjaro</li>
                          <li>• All Day</li>
                          <li>• Doobai</li>
                          <li>• Lonart</li>
                          <li>• MTN “Turn it up”</li>
                        </ul>
                      </div>
                      {/* Short Films */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Short Films</h3>
                        <ul className="space-y-1">
                          <li>• Corn Roasters</li>
                          <li>• Life’s Good</li>
                          <li>• White Dogs</li>
                          <li>• The Last Condom</li>
                          <li>• My Stand</li>
                          <li>• Depth of Field</li>
                          <li>• Sticks and Love</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {currentScreen === 5 && (
                <div className="text-center text-white px-8 max-w-6xl z-10 p-2">
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
                          <Image
                            src={image}
                            alt={`Portfolio ${index + 1}`}
                            className="w-full h-full object-cover"
                            width={400}
                            height={400}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white text-sm font-medium">
                            Look {index + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {currentScreen === 7 && (
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
                      <a href="tel:+2348066838876" className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now: (234) 806-683-8876
                      </a>
                      <a href="mailto:franarticartistry@gmail.com" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Me
                      </a>
                    </div>
                    <div className="text-sm opacity-80">
                      📍 Available in Lagos, Nigeria and for travel
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        prevScreen={prevScreen}
        nextScreen={nextScreen}
        currentScreen={currentScreen}
        isAnimating={isAnimating}
        screensLength={screens.length}
      />

      {/* Screen Indicators - bottom center on desktop, top right/vertical on mobile */}
      {/* Mobile: top right, vertical stack */}
      <div
        className="z-[105] flex flex-col gap-2 fixed top-4 right-2 md:hidden"
        style={{ alignItems: 'flex-end' }}
      >
        {screens.map((screen, index) => (
          <button
            key={index}
            onClick={() => goToScreen(index)}
            className={`
              relative group transition-all duration-300 hover:scale-125
              ${index === currentScreen ? "scale-125" : ""}
              w-4 h-4
              focus:outline-none
            `}
            aria-label={`Go to screen ${screen.title}`}
          >
            <div
              className={`
                w-4 h-4 rounded-full transition-all duration-300
                ${
                  index === currentScreen
                    ? "bg-amber-400 shadow-lg ring-4 ring-amber-400/30"
                    : "bg-white/60 hover:bg-white/80"
                }
              `}
            />
          </button>
        ))}
      </div>
      {/* Desktop: bottom center, horizontal row */}
      <div
        className="hidden md:flex fixed left-1/2 bottom-8 -translate-x-1/2 z-[105] flex-row gap-4 items-center"
      >
        {screens.map((screen, index) => (
          <button
            key={index}
            onClick={() => goToScreen(index)}
            className={`
              relative group transition-all duration-300 hover:scale-125
              ${index === currentScreen ? "scale-125" : ""}
              w-4 h-4
              focus:outline-none
            `}
            aria-label={`Go to screen ${screen.title}`}
          >
            <div
              className={`
                w-4 h-4 rounded-full transition-all duration-300
                ${
                  index === currentScreen
                    ? "bg-amber-400 shadow-lg ring-4 ring-amber-400/30"
                    : "bg-white/60 hover:bg-white/80"
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* Footer */}
      <FooterBar />

      {/* Header (progress bar, brand, socials) */}
      <HeaderBar />
      {/* Progress bar overlay (moved from HeaderBar for dynamic width) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/30">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
        />
      </div>
      </div>
    );
  }
