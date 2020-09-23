import React from "react";

export default function Task(props) {
  return (
    <li>
      <button
        onClick={() => {
          props.deleteTask(props.task);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          props.startEditingTask(props.task);
        }}
      >
        Edit
      </button>
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={() => {
          props.updateTaskStatus(props.task);
        }}
      />
      {props.task.description}
    </li>
  );
}
