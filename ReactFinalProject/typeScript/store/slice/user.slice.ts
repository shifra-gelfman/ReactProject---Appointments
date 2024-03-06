import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../interfaces/user.interface'

type userState = { user: User | {} }

const initialState: userState = {
  user: {
    firstName: 'aaa',
    lastName: 'bbbb',
    birthday: new Date(2000, 10, 10),
    idNumber: '123123123',
  },
}

// הגדרה של סליס - יחידת נושא מסוים
// מכילה את השם, סטייט בסיסי, ואת הרדיוסרס - פונקציות שמשנות את הסטייס
// יש להגדיר פונקציה לכל ארוע שהיה יכול לקרות, ובתוך הפונקציה יש לשנות אותו בהתאם לארוע
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // action - מכיל את המידע של השינוי
    signin: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.user = action.payload;
    },
    signout: (state) => {
        state.user = {};
    }
  },
})

// Action creators are generated for each case reducer function
export const { signin, signout } = userSlice.actions;

export default userSlice.reducer;