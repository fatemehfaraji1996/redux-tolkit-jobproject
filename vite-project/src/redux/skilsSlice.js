// import { createSlice } from '@reduxjs/toolkit'
// const skilsSlice =createSlice({
//     name:'skils',
//     initialState:[],
//     reducers:{
//     create:((state,action)=>{
//         state.push(action.payload)
//     })
//     }
// })
// export const  {create}= skilsSlice.actions
// export default skilsSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSkill: null,
  persons: [], // داده‌های اشخاص به‌صورت آرایه‌ای از اشیاء
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    selectSkill(state, action) {
      state.selectedSkill = action.payload;
    },
    clearSkill(state) {
      state.selectedSkill = null;
    },
    setPersons(state, action) {
      state.persons = action.payload;
    },
  },
});

export const { selectSkill, clearSkill, setPersons } = skillsSlice.actions;
export default skillsSlice.reducer;