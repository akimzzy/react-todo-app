import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Todo from './Todo';

const TodoList = () => {
    const { list } = useContext(GlobalContext);

    return (<ul>
        <h2>My list</h2>
        {list.map(cur => <Todo key={cur.id} subTodo={cur.subTodo} text={cur.text} dateTime={cur.dateTime} id={cur.id} />)}
    </ul>);
}

export default TodoList;