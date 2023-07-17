import React from "react";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import useInput from "../../../hooks/use-input";
import {Box, Typography} from "@mui/material";

const AddTask : React.FC<{onAddTask : (taskName:string) => void}> = (props) => {
    const 
    { 
        value: taskName, 
        isValid:taskNameIsValid, 
        onFieldChange: onTaskNameChange, 
        onInvalidSubmit: onInvalidTaskNameSubmit ,
        resetField: resetField
    } = useInput(value => value.length > 0);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if(!taskNameIsValid){
            onInvalidTaskNameSubmit();
            return;
        }

        props.onAddTask(taskName);
        resetField();
    };
    
    return (
        <Box display="flex" justifyContent="center">
            <Box display="flex" flexDirection="column" className="login-card">
                <Typography variant="h4">
                    Add Task
                </Typography>
                <Box mt={2}>
                    <form onSubmit={handleSubmit}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <TextField 
                            id="email" 
                            error = {taskNameIsValid === false ? true : false}
                            label="Task" 
                            variant="outlined" 
                            onChange={onTaskNameChange} 
                            value={taskName}
                            helperText = {taskNameIsValid === false ? "Please enter a task name" : ""}
                            />
                            <Button type="submit" variant="outlined">Add</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default AddTask;