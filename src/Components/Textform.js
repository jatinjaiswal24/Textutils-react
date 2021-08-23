import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let upperText = Text.toUpperCase();
    setText(upperText);
  };
  const handleLoClick = () => {
    let lowerText = Text.toLowerCase();
    setText(lowerText);
  };
  const handleClearClick = () => {
    let clearText = "";
    setText(clearText);
  };
  return (
    <>
      <div className="container" style={{color:props.mode === "light" ? "black" :"white"}}>
        <h1 style={{color:props.mode === "light" ? "black" :"white"} }>{props.title}</h1>
        <div className="mb-3">
          <textarea
            rows="8"
            className="form-control"
            id="Input"
            value={Text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode === "light" ? "light" :"grey",
                    color:props.mode === "light" ? "black" :"white"}}
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert CAPITAL
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert LOWER
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          CLEAR TEXT
        </button>
      </div>
      <div className="container" style={{color:props.mode === "light" ? "black" :"white"}}>
        <h2>Your text summary</h2>
        <p>
          {Text.split(" ").length} word and {Text.length} characters in your
          text.
        </p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
