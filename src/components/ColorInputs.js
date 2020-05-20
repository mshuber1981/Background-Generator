import React from "react";

const ColorInputs = (props) => {
  return (
    <>
      <br></br>
      <div>
        <input
          className="button mx-2"
          type="color"
          value={props.color1}
          onChange={props.handleChange1}
        ></input>
        <input
          className="button mx-2"
          type="color"
          value={props.color2}
          onChange={props.handleChange2}
        ></input>
      </div>
      <br></br>
    </>
  );
};

export default ColorInputs;
