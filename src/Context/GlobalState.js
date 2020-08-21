import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
let todoData = {
    list: [
        // {
        //     text: "Go to store",
        //     id: 1, done: false,
        //     dateTime: "18-07-2020 | 15:46",
        //     subTodo: [
        //         { text: "Buy Rice", id: 11, done: false },
        //         { text: "Buy Beans", id: 12, done: false },
        //         { text: "Buy Bread", id: 13, done: false },
        //         { text: "Buy Pepper", id: 14, done: false },
        //         { text: "Buy Tomatoes", id: 15, done: false },
        //     ]
        // },
        // {
        //     text: "Go to eat",
        //     id: 2, done: false,
        //     dateTime: "18-07-2020 | 15:46",
        //     subTodo: [
        //         { text: "Rice", id: 21, done: true },
        //         { text: "Beans", id: 22, done: false },
        //     ]
        // }
    ]
}

// Create context
export const GlobalContext = createContext(todoData);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, todoData)

    // Actions
    const deleteTodo = id => {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        })
    }

    const addTodo = todo => {
        dispatch({
            type: "ADD_TODO",
            payload: todo
        })
    }

    const doneTodo = (id, checkValue) => {
        dispatch({
            type: "DONE_TODO",
            payload: { id, checkValue }
        })
    }

    const addSubTodo = (id, subTodo) => {
        dispatch({
            type: "ADD_SUB_TODO",
            payload: {
                id,
                subTodo
            }
        })
    }

    const deleteSubTodo = (parentId, id) => {
        dispatch({
            type: "DELETE_SUB_TODO",
            payload: { parentId, id }
        })
    }

    const doneSubTodo = (parentId, id, checkValue) => {
        dispatch({
            type: 'DONE_SUB_TODO',
            payload: {parentId, id, checkValue}
        })
    }

    return (<GlobalContext.Provider value={{
        list: state.list,
        deleteTodo,
        addTodo,
        doneTodo,
        addSubTodo,
        deleteSubTodo,
        doneSubTodo
    }}>
        {children}
    </GlobalContext.Provider>)
}