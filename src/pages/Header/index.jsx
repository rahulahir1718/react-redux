import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom"
import '../../dev-style.css';

const Header = (props) => {

    const {isLoggedIn, userEmail} = useSelector(state=>state.authState);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <AppBar component="nav">
            <Toolbar>
                <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                Welcome {isLoggedIn === true ? userEmail : 'to login'}
                </Typography>
                {/* {isLoggedIn === true && <Box display="flex" gap={3}>
                    <NavLink to="/teams" className="nav-link" activeClassName="nav-link-active">
                        Teams
                    </NavLink>
                    <NavLink to="/players" className="nav-link" activeClassName="nav-link-active">
                        Players
                    </NavLink>
                    <NavLink to="/counter" className="nav-link" activeClassName="nav-link-active">
                        Counter
                    </NavLink>
                </Box>} */}
                {isLoggedIn === true && <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button variant="outline" onClick={() => {dispatch(authActions.logout()); history.replace("/login")}}>Logout</Button>
                </Box>}
            </Toolbar>
      </AppBar>
    );
};

export default Header;