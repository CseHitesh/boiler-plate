import { combineReducers } from "@reduxjs/toolkit";
import userSlice  from "./slices/userSlice";
import counterSlice from "./slices/counterSlice";



export const rootReducer = combineReducers({
  users: userSlice.reducer,
  count: counterSlice.reducer

})

