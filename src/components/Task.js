import "./Task.css";


const Task=(props)=>{

    return(

<div className="task-card">

    <p>{props.a}</p>
    <button className="task-button done-button">Done</button>
    <button className="task-button delete-button">Delete</button>
</div>
    );


};

export default Task;