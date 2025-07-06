"use client";

import { useState, useEffect } from "react";
import screens from "@/app/data/screens";
import testimonialsData from "@/app/data/testimonials";
import floatingElements from "@/app/data/floatingElements";
import FloatingElements from "@/app/components/FloatingElements";
import HeaderBar from "@/app/components/HeaderBar";
import FooterBar from "@/app/components/FooterBar";
import NavigationControls from "@/app/components/NavigationControls";
import Hero from "@/app/components/screens/Hero";
import About from "@/app/components/screens/About";
import Services from "@/app/components/screens/Services";
import Featured from "@/app/components/screens/Featured";
import OtherProjects from "@/app/components/screens/OtherProjects";
import Portfolio from "@/app/components/screens/Portfolio";
import Testimonials from "@/app/components/screens/Testimonials";
import Contact from "@/app/components/screens/Contact";
import ScreenNavigation from "./components/ScreenNavigation";

const screenComponents = {
  hero: Hero,
  about: About,
  services: Services,
  featured: Featured,
  "other-projects": OtherProjects,
  portfolio: Portfolio,
  testimonials: Testimonials,
  contact: Contact,
};

export default function MakeupArtistPortfolio() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


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
    if (screens[currentScreen].id === "testimonials") {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  const currentScreenData = screens[currentScreen];
  const ScreenComponent = screenComponents[currentScreenData.id];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <div className="relative w-full min-h-screen overflow-auto hide-scrollbar font-serif">
      {/* Floating Background Elements */}
      <FloatingElements floatingElements={floatingElements} />

      {/* Screen */}
      <div
        className={`
          ${currentScreenData.bgColor}
          w-full min-h-screen flex items-center justify-center relative
          transition-all duration-700 ease-in-out
          ${isAnimating ? "scale-105 opacity-40" : "scale-100 opacity-100"}
        `}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>

        <div className="overflow-y-auto hide-scrollbar max-h-[calc(100vh-8rem)] w-full">
          <ScreenComponent
            data={currentScreenData}
            {...(currentScreenData.id === "testimonials" && {
              testimonials: testimonialsData,
              currentTestimonial,
              nextTestimonial,
              prevTestimonial,
            })}
          />
        </div>
      </div>

      {/* Navigation */}
      <NavigationControls
        prevScreen={prevScreen}
        nextScreen={nextScreen}
        currentScreen={currentScreen}
        isAnimating={isAnimating}
        screensLength={screens.length}
      />

      {/* Dot Indicators (desktop) */}
      <div className="hidden md:flex fixed left-1/2 bottom-8 -translate-x-1/2 z-[105] flex-row gap-4 items-center">
        {screens.map((screen, index) => (
          <button
            key={index}
            onClick={() => goToScreen(index)}
            className={`relative group transition-all duration-300 hover:scale-125 ${
              index === currentScreen ? "scale-125" : ""
            } w-4 h-4 focus:outline-none cursor-pointer`}
            aria-label={`Go to screen ${screen.title}`}
          >
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentScreen
                  ? "bg-amber-400 shadow-lg ring-4 ring-amber-400/30"
                  : "bg-white/60 hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>

        <ScreenNavigation screens={screens} currentScreen={currentScreen} goToScreen={goToScreen} isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen}/>
      {/* Header & Footer */}
      <HeaderBar />
      <FooterBar />

      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/30">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
