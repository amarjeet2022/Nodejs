import React from 'react'
import { useState } from 'react'

const ToDoList=()=>{

const  [input, setInput]=useState("");
const [viewItem, setViewItem]= useState([])

const list=()=>{
    setViewItem((olditems)=>{
        return[...olditems, input]
    });
    setInput('')
}

const changeit=(e)=>{
    setInput(e.target.value)
}
    return(
        <>
         <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='card'>
                        <div className='card-head bg-dark text-white'><h1><b>ToDoList</b></h1></div>
                        <div className='card-Body mt-4'>
                            <label>
                                <input type='text' 
                                       placeholder='Write it Bitch!'
                                       className=''
                                       value={input}
                                        onChange={changeit}    
                                     />
                            </label>
                            <button onClick={list}><i className="fa fa-plus-circle" aria-hidden="true" width='50'></i></button>
                            <ol>
                                {
                                viewItem.map((index)=>{
                                 return(<li>{index}</li>
                                 )
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}
export default ToDoList