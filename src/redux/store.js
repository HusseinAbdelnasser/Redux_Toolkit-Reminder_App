import {configureStore} from '@reduxjs/toolkit';
import reminderSlice from './reminderSlice';
export const store = configureStore({
    reducer: {
      reminders: reminderSlice
    },
})