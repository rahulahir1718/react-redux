import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Task from "../../model/Task";
import TaskDetail from "./TaskDetail/index.tsx";
import { Box } from "@mui/material";
import AddTask from "./AddTask/index.tsx";
import { taskActions } from "../../store/task-slice.ts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Tasks: React.FC = () => {
    
    const dispatch = useDispatch();
    const tasks : Task[] = useSelector((state : any) => state.taskState.tasks);

    const onAddTask = (taskName:string) => {
        dispatch(taskActions.add(taskName));
    }

    const clickHandler = (taskName:string)  => {
        dispatch(taskActions.remove(taskName));
    };

    return (
        <Box>
            <AddTask onAddTask={onAddTask}/>
            {tasks.length > 0 && 
                tasks.map((task, index)=><TaskDetail task={task} onClick={clickHandler}/>)
            }
        </Box>
    );
}

export default Tasks;