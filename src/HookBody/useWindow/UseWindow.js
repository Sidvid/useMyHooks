import React, { useState, useEffect } from "react";

function useWindow() {
  const [size, setSize] = useState({
    height: "",
    width: "",
  });
  useEffect(() => {
    function sizeCalculator() {
      const height = window.innerHeight;
      const width = window.innerWidth;

      setSize({ ...size, height, width });
    }
    window.addEventListener("resize", sizeCalculator);
    sizeCalculator();
    return () => {
      window.removeEventListener("resize", sizeCalculator);
    };
  }, []);

  return {size};
}

export default useWindow;
