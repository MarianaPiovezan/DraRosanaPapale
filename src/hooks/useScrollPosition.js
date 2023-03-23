import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [ scrollPosition, setScrollPosition ] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updateScrollPosition);

    updateScrollPosition();

    return () => window.removeEventListener("scroll", updateScrollPosition); 
  }, []);

  return scrollPosition;

};