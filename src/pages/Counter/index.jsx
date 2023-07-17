import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { counterActions } from "../../store/counter-slice";
import { useEffect } from "react";
import { getCounterData, uploadCounterData } from "../../store/counter-action";

let initialCall = true;

const Counter = () => {

    const counter = useSelector(state => state.counterState.counter);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(initialCall === true){
            initialCall = false;
        }else{
            dispatch(uploadCounterData(counter));
        }
    }, [counter, dispatch]);

    useEffect(()=>{
        dispatch(getCounterData());
    }, [dispatch, getCounterData]);

    const Add = () => {
        dispatch(counterActions.add(15));
    };

    const Subtract = () => {
        dispatch(counterActions.subtract(5));
    };

    return(
        <Box>
            <Box display="flex" justifyContent="center" alignItems="center" height='100%' width='100%' mt={10}>
           <Typography variant="h3">
                {counter}
           </Typography> 
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" height='100%' width='100%' mt={10} gap={3}>
                <Button variant="outlined" onClick={Add}>Add</Button>
                <Button variant="outlined" onClick={Subtract}>Subtract</Button>
            </Box>
        </Box>
    );
}

export default Counter;