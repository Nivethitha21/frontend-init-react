export default function Init(props)
{
    let arr = props.ini.date? props.ini.date.split('T'):props.ini.date
    return(
        
        <div className="init">
            <h2 style={{fontFamily:"monospace"}}>{props.ini.name} </h2>
            <h3 style={{fontFamily:"Montserrat",fontWeight:"bolder"}}>Initiative by {props.ini.emp}</h3>
            <h5>{props.ini.description}</h5>
            <h5 className="titl">{props.ini.date? arr[0]: props.ini.date}</h5>
            <button className="subscribe">Subscribe</button>
            
        </div>
    )
}