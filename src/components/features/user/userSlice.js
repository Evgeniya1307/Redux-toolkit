//slice та часть редакс тулкита которая отвечает за инитилизацию стейта в наш стор и за все функции ктороые связаны со стейтом
  import { createSlice } from "@reduxjs/toolkit";


  const initialState = {// изначальное состояние
      firstName: "",
    lastName: "",  
  }


  export  const userSlice = createSlice({
      name: "user",//имя данному редюсеру 
initialState, //изночальное состояние 
  reducers: {//редюсер обьект функций который будет управлять нашим состоянием 
 setFirstName: (state, action)=> {
  StyleSheet.firstName = action.payload //action.payload -я на клиентской части буду передавать из формы и эти данные буду передавать вот именно те данные которые передаю будут находитьс в обьекте action в поле payload где будет например лежать имя иван
}, // научимся менять наш firstName: "",
},
})

export const {setFirstName}=userSlice.actions//setFirstName это функция доступна в любом месте приложения
export default userSlice.reducer