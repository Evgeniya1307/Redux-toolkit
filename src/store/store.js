import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/features/user/userSlice";
import todoSlice from "../components/features/user/todo/todoSlice";

export const store = configureStore({
  reducer: {
    user: userSlice, // поле, ключ user значение userSlice
    todo: todoSlice,
  },
}); //слайс отвечает за ту или иную часть приложения

//создали тут глобальный обьект стора где храниться весь наш стейт пото создаем для каждой сущности отдельный useSlise смотреть в нём
