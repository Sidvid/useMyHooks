import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
export function useOnMyScreen(options) {
  const [flag, setFlag] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log("entries", entries);
      setFlag(entry.isIntersecting);
    }, options);
    console.log("ref",ref.current);
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  },[ref , options]);
  return {
    ref , flag
  }

}
