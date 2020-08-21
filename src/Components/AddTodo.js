import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
const AddTodo = () => {
    const [text, setText] = useState("");
    const [animPlay, setAnimPlay] = useState(false)
    const { addTodo } = useContext(GlobalContext);
    const date = useDateTime()
    const newId = () => Math.ceil(Math.random() * 1000000) + 1;

    const addNewTodo = (e) => {
        e.preventDefault()
        if (text.trim() !== "") {
            const todo = {
                id: newId(),
                text,
                done: false,
                dateTime: date(),
                subTodo: []
            }
            setAnimPlay(true)
            const duration = Number(window.getComputedStyle(e.target.querySelector("svg"), null).getPropertyValue("transition-duration").replace("s", "")) * 1000
            addTodo(todo)
            setText("")
            setTimeout(() => {
                setAnimPlay(false)
            }, duration)



        }
    }

    return (<form onSubmit={(e) => addNewTodo(e)}>
        <label htmlFor="quickAdd"><h2>Quick Add</h2></label>
        <input type="text" id="quickAdd" placeholder="type here" required value={text} onChange={(e) => setText(e.target.value)} />
        <button>Add to list</button>
        <svg className={animPlay ? "add_anim" : null} xmlns="http://www.w3.org/2000/svg" width="16.004" height="11.333" viewBox="0 0 16.004 11.333"><path d="M-16.2,40.933a1,1,0,0,1-1.6,0l-7-9.333A1,1,0,0,1-24,30h14a1,1,0,0,1,.8,1.6Z" transform="translate(25.002 -30)" fill="#fff" /></svg>
    </form>);
}

const useDateTime = () => {
    const date = () => {
        const format = val => val.toLocaleString().length === 1 ? `0${val}` : val;
        return `${format(new Date().getDate())}-${format(new Date().getMonth())}-${new Date().getFullYear()} | ${format(new Date().getHours())}:${format(new Date().getMinutes())}`;
    }

    return date
}

export default AddTodo;