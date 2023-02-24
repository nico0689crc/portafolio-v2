import React, { useEffect, useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (window.pageYOffset > 500) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },100);
  },[]);

  return isVisible ? <ScrollToTopButton /> : null;
}
