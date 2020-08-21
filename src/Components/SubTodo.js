import React, { useContext, useState, useEffect } from 'react';
import AddSubTodo from './AddSubTodo';
import { GlobalContext } from '../Context/GlobalState';

const SubTodo = ({ id, subTodo, showSubTodo, setShowSubTodo, heading }) => {
    const { doneSubTodo } = useContext(GlobalContext)
    const { deleteSubTodo } = useContext(GlobalContext);
    const [CheckValue, setCheckValue] = useState(false)


    return (<div className={showSubTodo ? "subTodo_containter" : "subTodo_containter hide"}>
        <AddSubTodo parentId={id} />
        <h2>{heading}</h2>
        <ul>
            {subTodo.map(x =>
                <li key={x.id}>
                    <h3>{x.text}</h3>
                    <input 
                        type="checkbox" 
                        checked={CheckValue} onChange={() => setCheckValue(!CheckValue)} />
                    <button onClick={() => deleteSubTodo(id, x.id)}><b>X</b></button>
                </li>
            )}
        </ul>
        <button className="return" onClick={() => setShowSubTodo(false)}>X</button>
    </div>);
}

export default SubTodo;