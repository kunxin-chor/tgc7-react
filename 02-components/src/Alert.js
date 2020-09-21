import React from "react";


export default function Alert(props) {
    return (
        <React.Fragment>
        <div style={{
            backgroundColor:props.bgcolor
        }}>
            {props.message}
        </div>
        </React.Fragment>
    )
}

// export default Alert;