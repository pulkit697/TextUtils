import React from "react";

export const Alert = (props) => {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div class={`alert alert-${props.alert.type}`} role="alert">
          <strong>{props.alert.heading}</strong>
          &nbsp;{props.alert.message}
        </div>
      )}
    </div>
  );
};
