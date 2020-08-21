import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AddSubTodo = ({parentId}) => {
    const { addSubTodo } =useContext(GlobalContext)
    const [text, setText] = useState("");
    const newId = () => Math.ceil(Math.random() * 1000000) + parentId;

    const handleSubmit = (e) => {
        e.preventDefault() 
        
        const subTodo = {
            id: newId(),
            text,
            done: false
        }
        addSubTodo(parentId, subTodo)
        setText("")
    }


    return ( <form className="addSubTodo" onSubmit={handleSubmit}>
        {/* <label htmlFor="add_details"><h3>Add details</h3></label> */}
        <input type="text" id="add_details" value={text} onChange={ (e) => setText(e.target.value)} required/>
        <button>Add</button>
    </form> );
}
 
export default AddSubTodo;