import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import SubTodo from './SubTodo';

const Todo = ({ text, dateTime, id, subTodo }) => {
    const { doneTodo, deleteTodo } = useContext(GlobalContext)
    const [fade, setFade] = useState(false)
    const [CheckValue, setCheckValue] = useState(false)
    const [showSubTodo, setShowSubTodo] = useState(false);

    const animDeleteTodo = id => {
        setFade(true)
        window.addEventListener("transitionend", () => deleteTodo(id))
    }

    useEffect(() => doneTodo(id, CheckValue), [CheckValue])

    return (
        <div>
            <li className={fade ? "del_anim" : null}>
                <div >
                    <h3 className={CheckValue ? "done_todo" : null} onClick={() => setShowSubTodo(true)} >{text}</h3>
                    <span style={{ background: CheckValue ? "white" : "transparent" }}>
                        <input type="checkbox" checked={CheckValue} onChange={() => setCheckValue(!CheckValue)} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={CheckValue ? "feather feather-check-circle check_anim" : "feather feather-check-circle"} ><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </span>
                    <button onClick={() => { animDeleteTodo(id) }}>X</button>
                </div>
                <p>{dateTime}</p>
            </li>
            <SubTodo heading={text} showSubTodo={showSubTodo} setShowSubTodo={setShowSubTodo} id={id} subTodo={subTodo} />
        </div>


    );
}

export default Todo;