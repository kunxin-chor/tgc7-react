import React from 'react'

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
        new_task_description:""
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
            'tasks': [...this.state.tasks, newTask]
        })
    }

    // updateTaskStatus = (task) => {
        
    //     // make a copy of that task
    //     // note: the spread operator also works for objects
    //     let modifiedTask = {...task};

    //     // change the copy
    //     modifiedTask.done = !task.done;

    //     // make a copy of the original array
    //     let modifiedTaskList = [...this.state.tasks];

    //     // in the copy, replace the old task with the modified task
    //     let index = modifiedTaskList.findIndex(function(element){
    //         return element.id === modifiedTask.id;
    //     })

    //     /*
    //     let index = -1;
    //     for (let i=0; i < modifiedTaskList.length; i++) {
    //         if (modifiedTasks[i].id == modifiedTask.id) {
    //             index = i;
    //             break;
    //         }
    //     }
    //     */

    //     modifiedTaskList[index] = modifiedTask;

    //     // save the copy of the array back to the state
    //     this.setState({
    //         tasks: modifiedTaskList
    //     })


    // }

    // updateTaskStatus = (task) => {
    //     let modifiedTask = {
    //         ...task, done: !task.done
    //     }

    //     let modifiedTaskList = this.state.tasks.map( (task)=> {
    //         if (task.id !== modifiedTask.id) {
    //             return task;
    //         } else {
    //             return modifiedTask;
    //         }
    //     })

    //     this.setState({
    //         'tasks': modifiedTaskList
    //     })
 
    // }

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

    render() {
        return (
            <React.Fragment>
                <h1>Task List</h1>
                <ul>
                    {this.state.tasks.map(t=>{
                        return <li>
                            <input type="checkbox" checked={t.done} onChange={()=>{
                                this.updateTaskStatus(t)
                            }}/>{t.description} 
                        </li>
                    })}
                </ul> 
                <h2>Add New Task</h2>           
                <div>
                    <label>Task Description</label>
                    <input type="text" name="new_task_description" value={this.state.new_task_description} onChange={this.updateFormField}/>
                    <button onClick={this.addNewTask}>Add</button>
                </div>
            </React.Fragment>
        )
    }
}