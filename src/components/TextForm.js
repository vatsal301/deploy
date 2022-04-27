import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClink = () => {
    console.log("Uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  };
  const handleLoClink = () => {
    console.log("Lowercase");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  };
  const handleClearClink = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = ()=>{
      let text = document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copy to Clipboard!", "success")
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success")
  }

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3 container" style={{color : props.mode === "dark" ? "white" : "black"}}>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control my-4"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="10"
            style={{backgroundColor : props.mode === "dark" ? "#424d56" : "white", color : props.mode === "dark" ? "white" : "#424d56"}}
          ></textarea>
     

          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClink}> Convert to Uppercase  </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClink}> Convert to Lowercase </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClearClink}> Clear Text </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
        </div>
      </div>
      <div className="container my-3" style={{color : props.mode === "dark" ? "white" : "black"}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length >0 ? text : "Enter something in the textbox above to priview it here"}</p>
      </div>
    </>
  );
}
