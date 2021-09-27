import React from 'react';


const Task = ({task, ...props}) =>{
    const ActionButton = ()=>
    <div className = 'action-btn'>
        {
        !task.completed ? <p onClick = {props.completedTasks}>&#9989;</p> : <p onClick = {props.deleteTasks}>&#10060;</p>
        }
    </div>
    return(
        <div className = "task">
            <p>{task.name}</p>
            <p>{task.description}</p>
            <ActionButton></ActionButton>
        </div>
    )
}
export default Task;