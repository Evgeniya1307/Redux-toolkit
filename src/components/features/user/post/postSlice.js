//создали новый Slice будем получать посты
// npm i axios сделали 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    posts:[],
}

export const getPosts = createAsyncThunk(
    "posts/getPosts",//как формируется мы берем первым параметром из name название и название нашей функции posts/getPosts, вторым принимаем функцию async (принимает пелоид но в данном случаем мы делаем гет запрос к постам и ставим  _ означает что первый аргумент не требуется а второй {rejectWithValue набор обшина})=> теперь логика {нам надо сделать запрос поэтому const res = await axios.get("https://jsonplaceholder.typicode.com/posts")  }
async(_,{rejectWithValue})=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts") //возвращается массив моих постов
//данные нужно сохранить в стейт 
})
    

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
//action 
setPosts: (state,action) => {
state.posts=action.payload// action.payload поэтому там где запрос возвр,массив постов 
},
    },
})

export const {setPosts}=postSlice.actions//export и подключем тут {setPosts} из =postSlice.actions
export default postSlice.reducer


//createAsyncThunk при помощи неё будем делать запросы так как в reducers не должно быть сайд эффектов, т,е если мы работаем с асинхронностью какие то запрсы к базе к какой то айпишке  