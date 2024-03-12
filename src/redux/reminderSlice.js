import { createSlice } from "@reduxjs/toolkit";


export const reminderSlice = createSlice({
    name: "reminders",
    initialState: {
        items: []
    },
    reducers: {
      addReminder: function(state,action){
        state.items.push(action.payload)
      },
      removeReminder:function(state,action){
        state.items = state.items.filter(item => item.id !== action.payload)
      },
      clearReminders:function(state,action){
        state.items = []
      }
    }
})



export const { addReminder, removeReminder, clearReminders } = reminderSlice.actions;

export default reminderSlice.reducer