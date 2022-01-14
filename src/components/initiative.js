import React from "react"
import Init from "./init"
import './init.css'

export default function Initiative(props){
    let [list,setList] = React.useState([{
        date:null,description:"",name:"",status:"",eid:null}])
        React.useEffect(() =>{
        
            fetch("http://localhost:8080/emp/curInit",{
                headers:{
                    "Content-Type":"application/json"
                },
                method:"GET",
               //  mode:"no-cors"
            })
               .then(res => res.json())
               .then(dataa => {
                   console.log(dataa)
                   return setList(dataa)})
               .catch((error) => console.log(error))
       },[])
    
    let initData = list.map((initi =>{
           return <Init key = {initi.id} ini = {initi} />
       }))

   
    return(
        <div className="initiative">
            {initData.length > 6 ?initData.splice(7):initData}
            <p className="title">Current Initiatives</p>
            {initData.length > 6 ?<a style={{float:"right"}}href="">View More</a>:""}
        </div>
    )
}