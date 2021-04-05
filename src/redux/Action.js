import {ADD_TODO, DELETE_TODO, UPDATE_TODO, COMPLETE_TODO} from './ActionType'



export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
})

export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
})

export const completeTodo = (todo) => ({
    type: COMPLETE_TODO,
    payload: todo
})

