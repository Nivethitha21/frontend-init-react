import {React, useState} from 'react'
import { Navigate } from 'react-router-dom'
export default function SignIn(){
    let [formData,setFormData] = useState({email:"",password:""})
    let [status,setStatus] = useState({id:-2})
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
                'Accept': 'application/json'
            }
        }) .then(res => res.json())
        .then(dataa => {
            // console.log('id: ',dataa)
            return setStatus({id:dataa})})
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
            
            <img className="signUpImage" src={require("..//images//signUp.jpg")}/>
            {status.id == 0?<h3 style={{color:"red"}}>user not registered</h3>:status.id == -1?
            <h3 style={{color:"red"}}>incorrect password</h3>:status.id > 0?
            <Navigate to = {`/home/${status.id}`}/>:""}
        </div>
        </div>
    )
}