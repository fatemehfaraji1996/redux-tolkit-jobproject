import { configureStore } from "@reduxjs/toolkit";
import skilreduser from '../redux/skilsSlice'
const store =configureStore({
    reducer:{
        skills:skilreduser
    }
})
export {store}