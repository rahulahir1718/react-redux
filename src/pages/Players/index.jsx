import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Players = () => {
    return(
        <Box>
            <Box display="flex" justifyContent="center" alignItems="center" height='100%' width='100%' mt={10}>
                <Typography variant="h3">
                        Hello from players page!!
                </Typography> 
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" height='100%' width='100%' mt={10} flexDirection="column">
                <ul>
                    <NavLink to="/players/1"><li>Player 1</li></NavLink>
                    <NavLink to="/players/2"><li>Player 2</li></NavLink>
                    <NavLink to="/players/3"><li>Player 3</li></NavLink>
                </ul>
            </Box>
        </Box>
    );
};

export default Players;