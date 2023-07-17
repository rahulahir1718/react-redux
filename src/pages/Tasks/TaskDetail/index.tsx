import { Card } from "@mui/material";
import React from "react";
import Task from "../../../model/Task";

const TaskDetail : React.FC<{task:Task, onClick: (taskName: string)=>void}> = (props) => {
   
    const clickHandler = () => {
        props.onClick(props.task.text)
    };

    return(
        <Card className='team-detail-card' onClick={clickHandler}>
            <div><b>{props.task.text}</b></div>
        </Card>
    );
};

export default TaskDetail;