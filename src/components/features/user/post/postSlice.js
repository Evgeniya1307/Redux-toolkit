//создали новый Slice будем получать посты
// npm i axios сделали
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [], // эти данные надо отрисовывать иду в компонент posts.js import useSelector
};

export const getPosts = createAsyncThunk(
  "posts/getPosts", //как формируется мы берем первым параметром из name название и название нашей функции posts/getPosts, вторым принимаем функцию async (принимает пелоид но в данном случаем мы делаем гет запрос к постам и ставим  _ означает что первый аргумент не требуется а второй {rejectWithValue набор обшина})=> теперь логика {нам надо сделать запрос поэтому const res = await axios.get("https://jsonplaceholder.typicode.com/posts")  }
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id12}`); //возвращается массив моих постов
    dispatch(setPosts(res.data)); //вызвали dispatch (берём экшин setPosts куда мф передаём (res.data)) в обьекте res в его поле data  будет лежать массив того чего мы получили из await axios.get("https://jsonplaceholder.typicode.com/posts"
    //данные нужно сохранить в стейт
  }
);

//на удаление postitem делаю асинхрон,операц
export const deletePostById = createAsyncThunk(
  "posts/deletePostById",
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`); //` ` и ${id} вывела как переменную
    // вызываю диспатч
    dispatch(deletePost(id));
  }
); //async(id) такак убирать айди это первый элемент вторым {rejectWithValue, dispatch

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //action
    setPosts: (state, action) => {
      state.posts = action.payload; // action.payload поэтому там где запрос возвр,массив постов
    },
    //делаю экшин который меняет стейт при удалении
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload); //берём стейт постс который уже есть= стейт.постс.фильт где мы получем пост и если пост.id неравен action.payload то тогда вовращаем новый массив
    },
  },
  //правильно эскпортировать getPosts в обычн,редюсерах нельзя используем extraReducers и 3 метода когогда то или иное событие происходит смотри ниже, rejectWithValueблагодаря этому импорту имеем доступ к нашим 3 методам
  extraReducers: {
    [getPosts.fulfilled]: () => console.log("getPosts:fullfiled"), //выполненный когда наш запрос прощёл успешно
    [getPosts.pending]: () => console.log("getPosts:pending"), //pending в ожидании когда ожидаем наш запрос
    [getPosts.rejected]: () => console.log("getPosts:rejected"), //rejected отклонённый когда есть какая то ошибка
    [deletePostById.fulfilled]: () => console.log("deletePostById:fullfiled"),
    [deletePostById.pending]: () => console.log("deletePostById:pending"),
    [deletePostById.rejected]: () => console.log("deletePostById:rejected"),
  },
});

export const { setPosts, deletePost } = postSlice.actions; //export и подключем тут {setPosts} из =postSlice.actions
export default postSlice.reducer;
//пошлa в стор и подключили

//createAsyncThunk при помощи неё будем делать запросы так как в reducers не должно быть сайд эффектов, т,е если мы работаем с асинхронностью какие то запрсы к базе к какой то айпишке
