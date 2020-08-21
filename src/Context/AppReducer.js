export default (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                list: [action.payload, ...state.list]
            }

        case 'DONE_TODO':
            return {
                ...state,
                list: state.list.map(x => {
                    if(action.payload.id === x.id) {
                        x.done = action.payload.checkValue
                    }
                    return x
                })
            }

        case 'DELETE_TODO':
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload)
            }

        case 'ADD_SUB_TODO':
            return {
                ...state,
                list: state.list.map(x => {
                    if (x.id === action.payload.id) {
                        x.subTodo = [action.payload.subTodo, ...x.subTodo]
                    }
                    return x
                })
            }

        case 'DELETE_SUB_TODO':
            return {
                ...state,
                list: state.list.map(x => {
                    if (x.id === action.payload.parentId) {
                        x.subTodo = x.subTodo.filter(x => x.id !== action.payload.id)
                    }
                    return x
                })
            }

        case 'DONE_SUB_TODO':
            return {
                ...state,
                list: state.list.map(x => {
                    if (x.id === action.payload.parentId) {
                        x.subTodo = x.subTodo.map(y => {
                            if (y.id === action.payload.id) {
                                y.done = action.payload.checkValue
                            }
                            return y
                        })
                        return x
                    }
                })
            }
        default:
            return state
    }
} 