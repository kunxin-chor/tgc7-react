import React from 'react'
import AddNewTask from "./AddNewTask"
import EditTask from "./EditTask"
import Task from "./Task"

export default class TaskList extends React.Component {

    state = {
        tasks:[
            {
                id: 1,
                description: "Wash the clothes",
                done: false
            },
            {
                id: 2,
                description: "Walk the dog",
                done: true
            },
            {
                id: 3,
                description: "Clean the bathroom",
                done: false
            }
        ],
        new_task_description:"",
        modified_task_description:"",
        task_being_edited:0
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addNewTask = () => {
        let id = Math.floor(Math.random() * 99999 + 10000);
        let newTask = {
            'id': id,
            'description': this.state.new_task_description
        };
        this.setState({
            'tasks': [...this.state.tasks, newTask],
            'new_task_description': ''
        })
    }

    updateTaskStatus = (task) => {
        let modifiedTask = {
            ...task, done: !task.done
        }

        let index = this.state.tasks.findIndex( (t) => {
            return t.id === modifiedTask.id
        })

        let modifiedTaskList = [ ...this.state.tasks.slice(0, index),
                                 modifiedTask,
                                 ...this.state.tasks.slice(index+1)
        ]

        this.setState({
            'tasks': modifiedTaskList
        })
    }

    updateTaskDescription = (task) => {
        let modifiedTask = {
            ...task, description: this.state.modified_task_description
        }

        let index = this.state.tasks.findIndex( (t) => {
            return t.id === modifiedTask.id
        })

        let modifiedTaskList = [ ...this.state.tasks.slice(0, index),
                                 modifiedTask,
                                 ...this.state.tasks.slice(index+1)
        ]

        this.setState({
            'tasks': modifiedTaskList,
            'task_being_edited': 0
        })
    }

    deleteTask = (task) => {
        let index = this.state.tasks.findIndex ( (t)=> {
            return t.id === task.id
        })

        let modifiedTaskList = [ ...this.state.tasks.slice(0, index),
                                 ...this.state.tasks.slice(index+1)
        ];

        this.setState({
            'tasks': modifiedTaskList
        })
    }

    startEditingTask = (task) => {
        this.setState({
            'task_being_edited': task.id,
            'modified_task_description': task.description
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Task List</h1>
                <ul>
                    {this.state.tasks.map(t=>{
                        if (t.id !== this.state.task_being_edited) {
                             return <Task
                                deleteTask={this.deleteTask}
                                startEditingTask={this.startEditingTask}
                                updateTaskStatus={this.updateTaskStatus}
                                task={t}
                             />
                        } else {
                            return <EditTask
                                modified_task_description={this.state.modified_task_description}
                                updateFormField={this.updateFormField}
                                updateTaskDescription={this.updateTaskDescription}
                                task={t}
                            />

                        }
                       
                    })}
                </ul> 
               <AddNewTask
                 new_task_description={this.state.new_task_description}
                 updateFormField={this.updateFormField}
                 addNewTask={this.addNewTask}
               />
            </React.Fragment>
        )
    }
}