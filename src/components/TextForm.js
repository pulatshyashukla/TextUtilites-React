// import { computeHeadingLevel } from "@testing-library/dom";
import React, { useState } from "react";
import copy from "copy-to-clipboard";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleonChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const handleOnClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    //console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const copyToClipboard = () => {
    copy(text);
    props.showAlert("Text is copied", "success");
    //alert(`You have copied "${text}"`);
  };
  const [text, setText] = useState("");
  // If  you want to change the useState
  // setText("new text"); --> this will change the text of useState

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#212520" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212520" : "white",
              color: props.mode === "light" ? "#212520" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "#212520" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read the text.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in the textbox to preview it here!"}
        </p>
      </div>
    </>
  );
}
