import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const PlayerDetail = () => {

    let params = useParams();

    return(
        <Box>
            <Box display="flex" justifyContent="center" alignItems="center" height='100%' width='100%' mt={10}>
                <Typography variant="h3">
                        Hello From Player {params['playerId']} !!
                </Typography> 
            </Box>
        </Box>
    );
};

export default PlayerDetail;