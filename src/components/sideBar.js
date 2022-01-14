import { Navigate,Routes,Route,BrowserRouter, useNavigate,Link} from "react-router-dom";
import { useState,React } from "react";
import Account from "./account";
import Init from './init.js'
import InitList from "./initList"
import MyInitiative from "./MyInitiative"
export default function Sidebar(props){
    let user = props.user;
    let [status,setStatus] = useState({allInit:false,acc:false,myInit:true})
     function handleClick(event)
    {
        // let [name,value] = event.target
        console.log('called handleclick'+event.target.name)
        setStatus(() =>{
            return {initList:false,acc:false,myInit:false}
        })
        setStatus((prevStatus) =>{
            return{...prevStatus,[event.target.name]:true}
        })
    }
    let navigate = useNavigate()
    return(
    
        <div className="sidebar">
            {/* <Link to = {{pathname:"account",state:{...user}}}> */}
            {status.allInit?<InitList  user = {user}/>:""}
            {status.acc?<Account user = {user}/>:""}
            {status.myInit?<MyInitiative init = {user.initiatives} empName = {user.name}/>:""}
            <img className = "user" name="acc" onClick = {handleClick} src={require("..//images//user.png")}/>
            <h2>{props.user.name}</h2>
            <h3>{props.user.email}</h3>
            <button name="allInit"  onClick = {handleClick} className="sideBar-item">All Initiatives</button>
            <button name = "myInit" onClick = {handleClick} className="sideBar-item">My Initiatives</button>
            <Link to = "/signIn" className="sideBar-item">Sign out</Link>  
        </div>
    )
}