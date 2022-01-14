import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import App from './App'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import Sidebar from './components/sideBar'
import Initiative from './components/initiative'
import Home from './components/home'
import SignUp from './components/SignUp';
import SignIn from './components/signIn'
import Account from './components/account'
ReactDOM.render(
<Router>
<Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="signIn"  element={<SignIn/>}/>   
    <Route path="home/:eid" element={<Home/>}/> 
</Routes>
</Router>,document.getElementById("root"));

function Inde(){
    return(
        <div>
            <Link to="/signUp">Sign Up</Link>
            <Link to="/signIn">Sign In</Link>
        </div>
    )
}