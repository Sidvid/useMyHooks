import { useRef, useState } from "react";
import UseWindow from "./UseWindow";
import "./style.css";
import { useEffect } from "react";

function UseWindowSize() {
  const [width, setWidth] = useState("");
  const ref = useRef();

  const changeHandle = (e) => {
    console.log("__");
    setWidth(ref.current.offsetWidth);
  };
  const { size } = UseWindow();
  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, [size]);

  return (
    <div>
      {`Window height ${size.height}`}
      <br />
      {`Window width ${size.width}`}
      <div ref={ref} onChange={changeHandle} className="box">
        {`My width is ${width}`}
      </div>
    </div>
  );
}

export default UseWindowSize;
