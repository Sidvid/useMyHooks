import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./myStyle.css";
import useOutsideClick from "./useOutsideClick";

function UseOutsideClickIndex() {
  const [showDropDown, setShowDropDown] = useState(false);
//   const ref=useRef();
  const {ref}=useOutsideClick(()=>setShowDropDown(true))
  console.log(showDropDown);
 

  return (
    <div className="my_container">
      <button onClick={() => setShowDropDown((val) => !val)}>
        Click on me
      </button>
      {showDropDown && (
        <div ref={ref} className="my_dropdown">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quibusdam voluptatem quis magnam libero voluptates, similique minus.
            Maxime debitis repellendus provident modi sapiente. Rem nam, quam
            deleniti nisi explicabo aliquid, facilis vel tenetur magnam pariatur
            odit earum dolorum voluptatibus cum eaque? Quod minima ipsum quaerat
            mollitia, rem quia! Modi soluta repudiandae et debitis facilis rem
            ea. Eum fuga maiores explicabo dolorum earum sed commodi libero
            modi, veritatis enim labore maxime dicta delectus sit eveniet eius
            recusandae expedita ducimus quis voluptas mollitia, doloremque sint
            repellat voluptates! Atque saepe assumenda tempora maxime nam
            adipisci, nulla itaque omnis suscipit praesentium voluptate a
            sapiente?
          </p>
        </div>
      )}
    </div>
  );
}

export default UseOutsideClickIndex;
