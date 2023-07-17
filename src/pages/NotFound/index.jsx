import { Box, Typography } from "@mui/material";

const NotFound = () => {
    return(
        <Box>
            <Box display="flex" justifyContent="center" alignItems="center" height='100%' width='100%' mt={10}>
                <Typography variant="h3">
                        404 Page Not Found !!
                </Typography> 
            </Box>
        </Box>
    );
};

export default NotFound;