import React from 'react'
 const Item =(props)=>{
    return(
    <>
    <li> <i 
    className="fa fa-trash" 
    aria-hidden="true"
     onClick={()=>{props.onselect(props.id)}} /> {props.text}</li>
    </>
    );
 }
 export default Item;