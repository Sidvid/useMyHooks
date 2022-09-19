import React, { useEffect } from "react";
import { useRef } from "react";
function useOutsideClick( callback) {
    const ref=useRef(null)
    console.log("in custom hook",ref);

  useEffect(() => {
    const clickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // setShowDropDown(false);
        callback();
      }
    };
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [ref , callback]);
  return {ref}

}
export default useOutsideClick;
