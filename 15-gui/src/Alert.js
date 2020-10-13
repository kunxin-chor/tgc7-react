import React from "react";

export default function Alert(props) {
  return (
    <React.Fragment>
      <div
        style={{
          position: 'absolute',
          width:"600px",
          height:"300px",
          top: "50%",
          left: "50%",
          transform:"translate(-50%, -50%)",
          backgroundColor: "grey",
          display: props.display ? "block" : "none"
        }}
      >
        {props.message}
        <div>
            <button onClick={props.done}>Done</button>
        </div>

      </div>
    </React.Fragment>
  );
}
