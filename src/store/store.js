import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/features/user/userSlice";

export const store =configureStore({
    reducer:{
        user:userSlice,// поле, ключ user значение userSlice
    },
})//слайс отвечает за ту или иную часть приложения