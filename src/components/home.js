import React, { useEffect } from "react"

import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import Account from "./account"
import InitList from "./initList"
import MyInitiative from "./MyInitiative"

import Sidebar from "./sideBar"
export default function Home(){
    let [user,setUser] = React.useState({name:"",email:"",password:"",eid:null,mobileNumber:""})
    
    const params = useParams()
    // console.log('id: ',params.eid)
    useEffect(()=>{
        fetch(`http://localhost:8080/emp/AccbyId/${params.eid}`,
        {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }})
        .then(res => res.json())
        .then(dataa => {
            // console.log(dataa)
            return setUser(dataa)})},[])
    // function handleClick(name)
    // {
    //     // let [name,value] = event.target?event.target:
    //     console.log('called handleclick'+name)
        
    //     setStatus(() =>{
    //         return {initList:false,acc:true,myInit:false}
    //     })
    //     setStatus((prevStatus) =>{
    //         return{...prevStatus,[name]:true}
    //     })
    // }
    return(
        <div>
            <Sidebar user = {user}/>
            
            
        </div>
    )
}