import { React, useState } from "react";
import { ClipBoardIcon } from "./icons/ClipBoardIcon";
import { DeleteIcon } from "./icons/DeleteIcon";

export const InputField = (props) => {
  document.title = `TextUtils - Home`;
  const [text, setText] = useState("");
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  const convertToUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert(
      "success",
      "Success",
      "Text has been changed to upper case"
    );
  };
  const convertToLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert(
      "success",
      "Success",
      "Text has been changed to lower case"
    );
  };
  const convertToInverseCase = () => {
    let newText = "";
    const lowertext = text.toLowerCase();
    const uppertext = text.toUpperCase();
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) newText += uppertext[i];
      else newText += lowertext[i];
    }
    setText(newText);
    props.showAlert(
      "success",
      "Success",
      "Text has been changed to inverse case"
    );
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("primary", "Success", "Copied to clipboard!");
  };
  const eraseText = () => {
    setText("");
    props.showAlert("warning", "Success", "Text erased");
  };
  return (
    <div>
      <h1 style={{ display: "inline" }}>Enter text to convert here:</h1>
      <div className="float-right">
        <button className="btn btn-link" onClick={copyToClipboard}>
          <ClipBoardIcon />
        </button>
        <button className="btn btn-link" onClick={eraseText}>
          <DeleteIcon />
        </button>
      </div>
      <textarea
        className="form-control my-2"
        value={text}
        onChange={onChangeHandler}
        rows="8"
        style={props.myStyle}
      />
      <button
        disabled={text.length === 0}
        className="btn btn-outline-primary m-1"
        onClick={convertToUpperCase}
      >
        Convert to UPPER Case
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-outline-primary m-1"
        onClick={convertToLowerCase}
      >
        Convert to lower Case
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-outline-primary m-1"
        onClick={convertToInverseCase}
      >
        Convert to InVeRsE Case
      </button>
      <h2 className="mt-4">Your Text Summary:</h2>
      <p>
        {
          text.split(" ").filter((word) => {
            return word.length !== 0;
          }).length
        }{" "}
        words and {text.length} characters
      </p>
      <h2>Preview:</h2>
      <p>{text.length === 0 ? "Nothing to preview" : text}</p>
    </div>
  );
};
