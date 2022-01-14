import React from 'react'
import './signUp.css';
import Home from './home';
import {useNavigate,Link,Router,Route,Routes,Outlet} from 'react-router-dom'

export default function SignUp(){
    let [formData,setFormData] = React.useState({
        name:"",mobileNumber : "",email : "",password : ""})

    function handleChange(event){
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData((prevFormData => {
            return {...prevFormData,[name] : value}
        }))
    }
    async function HandleSubmit(event){
        event.preventDefault();
        // const history = useNavigate()
        console.log(formData)
        let result = await fetch("http://localhost:8080/emp/addAcc",
        {
            body: JSON.stringify(formData),
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    }
    return(
        <div className="signup">
            {/* {formData.name} {formData.email} {formData.password} */}
            <form className="form" onSubmit={HandleSubmit}>
            <label htmlFor="name">Name: </label>

            <input type="text" 
            id = "name"  onChange = {handleChange}
            name="name" placeholder="Enter Employee Name"></input>

            <label htmlFor="mail">Email: </label>   
            <input type="text" id = "mail" 
            onChange = {handleChange} name="email" 
            placeholder="Enter email"></input>

            <label htmlFor="pass">Password: </label>    
            <input type="password" id = "pass" onChange = {handleChange} name="password" placeholder="Enter password"></input>
           
            <label htmlFor="mble">Mobile Number: </label>    
            <input type="text" id = "mble" onChange = {handleChange} name="mobileNumber" placeholder="Enter mobile Number"></input>
              
                <button className="submit">Sign Up</button>
                <Link to = "/signIn" style={{marginTop:"20px",marginLeft:"140px"}}> Already have account? Sign in</Link>
            </form>
            
            {/* <Outlet/> */}
            {/* {isRedirect == true ?<Navigate to = "/home" />:" "} */}
            <img className="signUpImage" src={require("..//images//signUp.jpg")}/>
        </div>
    )
}