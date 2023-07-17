import { Box } from "@mui/material";
import Sidebar from "../Sidebar";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import NotFound from "../NotFound";
import Login from "../Auth/Login";
import Tasks from "../Tasks/index.tsx";

const Counter = React.lazy(()=>import('../Counter'));
const Teams = React.lazy(()=>import('../Teams'));
const Players = React.lazy(()=>import('../Players'));
const PlayerDetail = React.lazy(()=>import('../Players/PlayerDetail'));

const Layout = () => {

    const {isLoggedIn} = useSelector(state => state.authState);

    return (
        <div class="layout">
            {isLoggedIn === true && <Box sx={{width:'300px'}}>
                <Sidebar />
            </Box>}
            <Box sx={{width:'-webkit-fill-available'}}>
                <Switch>
                    {isLoggedIn === true && <Route path = "/teams" exact>
                        <Teams/>
                    </Route>}
                    {isLoggedIn === true && <Route path = "/players" exact> 
                        <Players/>
                    </Route>}
                    {isLoggedIn === true && <Route path = "/players/:playerId" exact>
                        <PlayerDetail/>
                    </Route>}
                    {isLoggedIn === true && <Route path = "/counter" exact>
                        <Counter/>
                    </Route>}
                    {isLoggedIn === true && <Route path = "/tasks" exact>
                        <Tasks/>
                    </Route>}
                    <Route path="/Login" exact>
                        {!isLoggedIn && <Login/>}
                        {isLoggedIn && <Redirect to="/counter"/>}
                    </Route>
                    <Route path="/" exact>
                        <Redirect to="/Login"/>
                    </Route>
                    <Route path="*">
                        {isLoggedIn === true && <NotFound/>}
                        {isLoggedIn === false && <Redirect to="/Login"/>}
                    </Route>
                </Switch>
            </Box>
        </div>
    );
};

export default Layout;