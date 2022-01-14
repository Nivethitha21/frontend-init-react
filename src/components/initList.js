import Initiative from "./initiative"
import Initiative1 from "./initiative1"
export default function InitList(props){
    let user = props.user
    return(
        <div>
        <Initiative className="initiative" user = {user}/>
        <Initiative1 className="initiative1" user = {user}/>
        </div>
        )
}