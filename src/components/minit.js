export default function MInit(props)
{
    let arr = props.ini.date? props.ini.date.split('T'):props.ini.date
    return(
        
        <div className="init">
            <h2 style={{fontFamily:"monospace"}}>{props.ini.name} </h2>
            <h3 style={{fontFamily:"Montserrat",fontWeight:"bolder"}}>Initiative by {props.empName}</h3>
            <h5>{props.ini.description}</h5>
            <h5 className="titl">{props.ini.date? arr[0]: props.ini.date}</h5>
            <h5> {props.ini.status == "up"?"Upcoming Initiative":"Current Initiative"}</h5>
            <p style={{width:"30px",float:"left",marginTop:"100px",color:"blue",textDecoration:"underline"}}>Edit</p>
            <img style={{width:"30px",float:"right",marginTop:"90px"}}src={require("..//images//delete.png")}/>
        </div>
    )
}