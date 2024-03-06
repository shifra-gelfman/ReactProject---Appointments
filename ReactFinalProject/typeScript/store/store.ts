import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/user.slice';
// יצירה של store - 
// ישות שמאגדת את כל הרכיבים של רידקס - state
// state - המידע ששמור
// reducers - פונקציות שמשנות את ה state
export const store = configureStore({
  reducer: {
    // יש לטעון כאן את כל הסלייס - רדיוסרס של האפליקציה
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


