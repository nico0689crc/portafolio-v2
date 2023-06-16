import React, { useEffect } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function ScrollToTop() {

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

  return <ScrollToTopButton />;
}
