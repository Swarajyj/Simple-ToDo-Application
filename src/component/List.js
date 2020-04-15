import React from "react"
import '../assets/background.css'

const handleUpdate = (index,listvalue,update)=>{
    var newlistvalue=prompt("Update the new task ",listvalue)
    if(newlistvalue != null)
    {
        update(index,newlistvalue);
    }

}

function List(props){


        return(<div className="list">
                 <span className="list-value">{props.listvalue}</span>
                 <button className="list-delete" onClick={()=>{props.delete(props.index)}}>Delete</button>
                 <button className="list-update" onClick={()=>{handleUpdate(props.index,props.listvalue,props.update)}}>Update</button>
        </div>)
    
}
export default List;