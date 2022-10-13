import { useState } from 'react'
import {React} from 'react'
import Item from './Item'
// import {useParams} from 'react-router-dom'
const ToDo =()=>{
//   const {id}=useParams
    const [addItem, setAddItems] = useState("");

    const [viewItem, setViewItem] = useState([]);

    const inputItem=(event)=>{
        setAddItems(event.target.value)
    }
    const list =()=>{
          setViewItem((olditems)=>{
            return[...olditems, addItem]
          });
          setAddItems('')
    }
    
    const deleteItem=(id)=>{
        // console.log("delete")
        setViewItem((olditems)=>{
            return olditems.filter((Itemval, index)=>{
                return index !==id;
            })
        })
    }


    return(
        <>
        <div className='div_center'>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='card'>
                        <div className='card-header bg-primary'> <h2>ToDo </h2></div>
                        <div className='card-body'>
                            <label>
                                <input className='' value={addItem} type='text' placeholder='Add New Things' onChange={inputItem} />
                            </label>
                            <button className='btn btn-primary' onClick={list}><i className="fa fa-plus-circle" aria-hidden="true" width='50'></i></button>
                            <ol>
                                {/* <li>{addItem}</li> */}

                                {viewItem.map((Itemval, index)=>{
                                    return(
        
                                     <Item 
                                     text={Itemval}
                                     key={index} 
                                     id={index}
                                     onselect={deleteItem}/>
                                     
                                    
                                    )
                                })
                                }
                            </ol>
                           


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
           
        </>
    )
}
export default ToDo




// "json-server": "json-server --watch td.json --port 3001",
// "start:new": "concurrently \"npm start\" \"npm run json-server\"",
