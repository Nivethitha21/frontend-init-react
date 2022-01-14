import {React, useState} from 'react'
import { Navigate } from 'react-router-dom'
export default function SignIn(){
    let [formData,setFormData] = useState({email:"",password:""})
    let [status,setStatus] = useState({st:""})
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
        let result = await fetch("http://localhost:8080/emp/authenticate",
        {
            body: JSON.stringify(formData),
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'text/html'
            }
        }) .then(res => res.text())
        .then(dataa => {
            console.log(dataa)
            return setStatus({st:dataa})})
        .catch((error) => console.log(error))

    }
    return(

        <div>
             <div className="signup">
            {/* {formData.name} {formData.email} {formData.password} */}
            <form className="form" onSubmit={HandleSubmit}>
            <label htmlFor="email">Email: </label>   
            <input type="text" id = "mail" onChange = {handleChange} name="email" placeholder="Enter email"></input>
            <label htmlFor="pass">Password: </label>    
            <input type="password" id = "pass" onChange = {handleChange} name="password" placeholder="Enter password"></input>
            <button className="submit">Sign In</button>
            </form>
            
            {/* <Outlet/> */}
            {/* {isRedirect == true ?<Navigate to = "/home" />:" "} */}
            <img className="signUpImage" src={require("..//images//signUp.jpg")}/>
            {status.st == "Login Successful"?<Navigate to = "/home"/>:<h3 style={{color:"red"}}>{status.st}</h3>}
        </div>
        </div>
    )
}