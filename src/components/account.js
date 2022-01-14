import { useState } from 'react'
import './acc.css'
export default function Account(props)
{
    const us = props.user
    let [user,setUser] = useState({eid:us.eid,name:us.name,email:us.email,password:us.password,mobileNumber:us.mobileNumber})
    let [message,setMessage] = useState("")
    function editForm(event){
        let {name,value} = event.target
        setUser((prevUser =>{
            return {...prevUser,[name]:value}
        }))
    }
 
        async function handleSubmit(event){
            event.preventDefault();
            console.log(user);
            let result = await fetch("http://localhost:8080/emp/updateAcc",
            {
                body: JSON.stringify(user),
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'text/html'
                }
            }).then(res => res.text()).then(data => setMessage(data))
        }
    // console.log("hi from account!");
    return(
        <div className="account">
            <b><p>Employee ID: {props.user.eid}</p></b>
            <h3>{message}</h3>
            <form onSubmit={handleSubmit}>
        Name:<input type="text" 
                    name="name" 
                    onChange = {editForm} 
                    value={user.name}/>

        Email:<input type="text" 
                    name="email" 
                    onChange = {editForm}
                    value={user.email}/>

        Password:<input type="password"
                        name="password" 
                        onChange = {editForm} 
                        value={user.password}/>

        Mobile Number:<input type="text" 
                            name="mobileNumber" 
                            onChange = {editForm} 
                            value={user.mobileNumber}/>

        <button style={{float:"right",marginRight:"20px",height:"40px",color:"white",backgroundColor:"rgb(194, 27, 91)",marginBottom:"40px"}}>Save Changes</button>
        </form>
        </div>
    )
}