import "./Task.css";
import {useState} from "react";

const Task=(props)=>{


    const [task,setTask]=useState(props.a)

    const onBtnClick=()=>{

       setTask("Task Completed");
        console.log(task);

    }

  

    return(

<div className="task-card">

    <p>{task}</p>
    <button className="task-button done-button" onClick={onBtnClick}>Done</button>
    <button className="task-button delete-button">Delete</button>
</div>
    );


};

export default Task;