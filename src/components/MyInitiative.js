import { useEffect } from "react";
import Init from "./init";
import MInit from "./minit";
export default function MyInitiative(props){
    
    return(
        <div className="initiative">
           {props.init?props.init.map(i => <MInit empName={props.empName} ini = {i}/>):""}
        </div>
    )
}