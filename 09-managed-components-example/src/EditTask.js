import React from "react";

export default function EditTask(props) {
  return (
    <li>
      <input
        type="text"
        name="modified_task_description"
        value={props.modified_task_description}
        onChange={props.updateFormField}
      />
      <button
        onClick={() => {
          props.updateTaskDescription(props.task);
        }}
      >
        Modify
      </button>
    </li>
  );
}
