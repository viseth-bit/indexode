import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
import { easeQuadIn, easeQuadOut } from "d3-ease";
import { BsFillSquareFill } from "react-icons/bs";
import { SketchPicker  } from "react-color";
import "./App.css";


const ColorButton=(props)=> {

  let [isOpen, setIsOpen] = useState(false);
  let transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: "scale(0.95)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.95)" },
    config: (item, state) => ({
      easing: state === "leave" ? easeQuadIn : easeQuadOut,
      duration: state === "leave" ? 75 : 100,
    }),
  });
  console.log(props);

  
  return (
    <div >
      <button onClick={() => setIsOpen((isOpen) => !isOpen)} type="button">
        <BsFillSquareFill  color={props.color}  />
        {props.color}
      </button>
      {transitions.map(
        ({ item, key, props1 }) =>
          item && (
            <animated.div style={props1} key={key}>
             
            <SketchPicker 
              color={props.color}
              onChange={(color) => {
                props.ChangeColor(color.hex);
              }}
            />
            </animated.div>
          )
      )}
    </div>
  );
}
export default ColorButton;
