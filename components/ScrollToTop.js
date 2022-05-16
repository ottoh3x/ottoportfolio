import React, { useEffect } from "react";
import { useState } from "react";

export const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (window.ScreenY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  }, []);
  return <div>ScrollToTop</div>;
};
