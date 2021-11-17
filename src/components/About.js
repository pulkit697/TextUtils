import React from "react";

export const About = (props) => {
  document.title = `TextUtils - About`;
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            ...props.myStyle,
            ...{ borderColor: props.myStyle.color, borderWidth: "1px" },
          }}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.myStyle}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils give you a way to analyze your text quickly and
              efficiently.Be it word count, character count or capitalization.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            ...props.myStyle,
            ...{ borderColor: props.myStyle.color, borderWidth: "1px" },
          }}
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.myStyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free to use character counter tool that provides
              instant character count & word statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            ...props.myStyle,
            ...{ borderColor: props.myStyle.color, borderWidth: "1px" },
          }}
        >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software orks in any software such as Chrome,
              Firefox, Internet Explorer, Safari, Opera. It suits to count
              characters in Facebook, blog, book, excel document, pdf document ,
              essay, etc.
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
