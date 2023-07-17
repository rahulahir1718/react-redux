import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import {getAuthData, uploadAuthData} from './store/auth-action';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom';
import React from 'react';
import { Suspense } from 'react';
import Sidebar from './pages/Sidebar';
import Layout from './pages/Layout';

// const Counter = React.lazy(()=>import('./pages/Counter'));
const Header = React.lazy(()=>import('./pages/Header'));
// const Login = React.lazy(()=>import('./pages/Auth/Login'));
// const Teams = React.lazy(()=>import('./pages/Teams'));
// const Players = React.lazy(()=>import('./pages/Players'));
// const PlayerDetail = React.lazy(()=>import('./pages/Players/PlayerDetail'));
// const NotFound = React.lazy(()=>import('./pages/NotFound'));

let initialCall = true;

function App() {

  const dispatch = useDispatch();
  const {isLoggedIn, userEmail} = useSelector(state => state.authState);
    
  useEffect(()=>{
      if(initialCall === true){
          initialCall = false;
      }else{
          dispatch(uploadAuthData({isLoggedIn: isLoggedIn, userEmail: userEmail}));
      }
  }, [isLoggedIn, userEmail, dispatch]);

  useEffect(()=>{
    dispatch(getAuthData());
  }, [dispatch]);

  return (
  <Box>
    <Suspense fallback={<div>Loading..</div>}>
      <Box className="header">
        <Header />
      </Box>
      <Box>
        <Layout/>
      </Box>
      {/* <Switch>
        {isLoggedIn === true && <Route path = "/counter" exact>
          <Counter/>
        </Route>}
        {isLoggedIn === true && <Route path = "/teams" exact>
          <Teams/>
        </Route>}
        {isLoggedIn === true && <Route path = "/players" exact> 
          <Players/>
        </Route>}
        {isLoggedIn === true && <Route path = "/players/:playerId" exact>
          <PlayerDetail/>
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
      </Switch> */}
    </Suspense>
  </Box>
  );
}

export default App;
