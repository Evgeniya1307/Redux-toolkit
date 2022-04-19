import React from 'react'
import { useDispatch } from 'react-redux';
import {toggleCompletedTodo, removeTodo }  from "../components/features/user/todo/todoSlice.js";

const TodoItem = ({todo}) => {//принимаем todo сoзданное в app
    //dispatch
    const dispatch = useDispatch()//изменяем тудушки
      //нужно передать айдишник
    const toggleTodoHandler = (id)=> {
        dispatch(toggleCompletedTodo(id))//теперь надо его вызвать на кнопочку делит смотри ниже вешаем onClick = {()=>removeTodoHandler и куда передаём (todo.id)которое получаем из const TodoItem = ({todo})}
    }
    
    const removeTodoHandler = (id)=> {
dispatch(removeTodo(id))//диспатчим экшин removeTodo с параметром id
    }

    return (
       <div className='flex justify-between items-center my-2'>
            <div 
            //при нажатии  Complete
            onClick={() => toggleTodoHandler(todo.id)}//id берём из todo
            className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Complete
            </div>
            
            <div 
            className={`text-sm ${
                todo.completed ? 'line-through font-medium text-lime-400' : ''
                }`}
                > 
               {todo.text}
            </div>
            <div 
            onClick={()=>removeTodoHandler(todo.id)}//delete
            className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>       
            </div>
        </div>
    )
}

export default TodoItem;
