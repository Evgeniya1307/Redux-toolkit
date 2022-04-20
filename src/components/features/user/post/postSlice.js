//создали новый Slice будем получать посты
// npm i axios сделали
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {rejectWithValue} from "../post/postSlice";

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  "posts/getPosts", //как формируется мы берем первым параметром из name название и название нашей функции posts/getPosts, вторым принимаем функцию async (принимает пелоид но в данном случаем мы делаем гет запрос к постам и ставим  _ означает что первый аргумент не требуется а второй {rejectWithValue набор обшина})=> теперь логика {нам надо сделать запрос поэтому const res = await axios.get("https://jsonplaceholder.typicode.com/posts")  }
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts"); //возвращается массив моих постов
    dispatch(setPosts(res.data)); //вызвали dispatch (берём экшин setPosts куда мф передаём (res.data)) в обьекте res в его поле data  будет лежать массив того чего мы получили из await axios.get("https://jsonplaceholder.typicode.com/posts"
    //данные нужно сохранить в стейт
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //action
    setPosts: (state, action) => {
      state.posts = action.payload; // action.payload поэтому там где запрос возвр,массив постов
    },
  },
  //правильно эскпортировать getPosts в обычн,редюсерах нельзя используем extraReducers и 3 метода когогда то или иное событие происходит смотри ниже, rejectWithValueблагодаря этому импорту имеем доступ к нашим 3 методам
  extraReducers: {
    [getPosts.fulfilled]: () => console.log("fullfiled"),//выполненный когда наш запрос прощёл успешно
    [getPosts.pending]: () => console.log("pending"),//pending в ожидании когда ожидаем наш запрос
    [getPosts.rejected]: () => console.log("rejected"),//rejected отклонённый когда есть какая то ошибка
  },
});

export const { setPosts } = postSlice.actions; //export и подключем тут {setPosts} из =postSlice.actions
export default postSlice.reducer;
//пошлa в стор и подключили

//createAsyncThunk при помощи неё будем делать запросы так как в reducers не должно быть сайд эффектов, т,е если мы работаем с асинхронностью какие то запрсы к базе к какой то айпишке
