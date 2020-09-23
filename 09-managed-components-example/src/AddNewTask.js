import React from "react";

export default function AddNewTask(props) {
  return (
    <React.Fragment>
      <h2>Add New Task</h2>
      <div>
        <label>Task Description</label>
        <input
          type="text"
          name="new_task_description"
          value={props.new_task_description}
          onChange={props.updateFormField}
        />
        <button onClick={props.addNewTask}>Add</button>
      </div>
    </React.Fragment>
  );
}
