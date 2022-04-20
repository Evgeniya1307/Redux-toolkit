// создаю список задач в features создала папку todo в ней todoSelector.js

import { createSlice } from "@reduxjs/toolkit";

//создаю стейт для этого апликейшена
const initialState = {
  todos: [],
};

//создаю сам slice:

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //функция которая принимает (state, action)
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    //создаю новый экшин

    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
    //удалять айтомы создали функцию
    removeTodo:(state, action)=>{
        state.todos = state.todos.filter((todo)=>todo.id !== action.payload )// создали функцию которая принимает (state,action){ она будет state.todos изменять таким образом:=state.todos.filter он возвращает массив новый,где мы ищем элемент (todo)=> и проверяем что todo.id неравен action.payload  мы пробегаемся фильтрам по элементам todo если не совпадает todo.id !=== action.payload то мы это помещаем в стейт а тот элемент который совпадёт он останется забытым  
    }
  }, //тут {state.todos.push(action.payload)}  будем чтото вводить нажимать sambit и будет добавляться         addTodo:(state, action)=>{stat
})

export const { addTodo, toggleCompletedTodo, removeTodo } = todoSlice.actions; // из addTodo вытянули todoSlice.actions
export default todoSlice.reducer //  и теперь его подключаем возвращаемся stor  и точно также
