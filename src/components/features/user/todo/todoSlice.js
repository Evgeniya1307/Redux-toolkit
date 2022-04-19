// создаю список задач в features создала папку todo в ней todoSelector.js

import { createSlice } from "@reduxjs/toolkit";


//создаю стейт для этого апликейшена
const initialState={
    todos:[],
}

//создаю сам slice:

export const todoSlice = createSlice ({
    name: "todo",
    initialState,
    reducers:{
        //функция которая принимает (state, action)
        addTodo:(state, action)=> {
state.todos.push(action.payload)
        },

}, //тут {state.todos.push(action.payload)}  будем чтото вводить нажимать sambit и будет добавляться         addTodo:(state, action)=>{stat
})

export const {addTodo} = todoSlice.actions // из addTodo вытянули todoSlice.actions 
export default todoSlice.reducer//  и теперь его подключаем возвращаемся stor  и точно также 