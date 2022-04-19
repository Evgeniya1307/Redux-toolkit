import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './features/user/todo/todoSlice'
import { v4 } from 'uuid';


const Form = () => {
    //создаю обьект dispatch
    const dispatch = useDispatch()
   //создаю состояние 
   const [todoValue, setTodoValue] = React.useState("")
   //создаю функцию и обьект
   const addTodoHandler = () => {
      const todo = {
          id: v4(),
          text: "todoValue",
          completed: false,// будем менять 
      } 
      //когда сформировали обьект тудушки смотри выше будем вызывать диспатч
      dispatch(addTodo(todo))//наш action addTodo  и мы его вызываем и в качесте параметра передаём todo 
      //очищаем наш input
      setTodoValue("")
   }

    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                value={todoValue}
                placeholder='Type something...'
                //на input вешаю onChange принимет е и через setTodoValue (e.target.value) помещать, теперь значение из inputa будет лежать в todoValue
                onChange={(e)=> setTodoValue(e.target.value)}
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            //у нас есть handler и мы его вешаем на onClick
            onClick={()=> addTodoHandler() }
            >
                Submit
            </button>
        </form>
    )
}

export default Form
