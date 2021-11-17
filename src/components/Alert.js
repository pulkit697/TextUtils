import React from "react";

export const Alert = (props) => {
  return (
    props.alert && (
      <div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{props.alert.heading}</strong>
        &nbsp;{props.alert.message}
      </div>
    )
  );
};
