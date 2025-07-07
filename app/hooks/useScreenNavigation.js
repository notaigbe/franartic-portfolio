"use client";
import { useState } from "react";

export function useScreenNavigation(screensLength) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextScreen = () => {
    if (currentScreen < screensLength - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentScreen((prev) => prev + 1);
        setIsAnimating(false);
      }, 400);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentScreen((prev) => prev - 1);
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

  return {
    currentScreen,
    isAnimating,
    setCurrentScreen,
    nextScreen,
    prevScreen,
    goToScreen,
  };
}
