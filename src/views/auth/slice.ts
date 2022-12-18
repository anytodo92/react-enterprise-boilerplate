import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    profile: null,
  },
  reducers: {
    setCredentials: (state: any, { payload: { user, token } }) => {
      console.log(user, token);

      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        access_token: 'thisshouldbeatoken',
        profile: {
          fname: 'John',
          lname: 'Doe',
          user_type_id: 2,
        },
      };
    },
    logout: (state: any) => {
      return {
        ...state,
        access_token: null,
        errors: null,
        isLoggedIn: false,
        isLoading: false,
        profile: null,
      };
    },
  },
});

export const { setCredentials, logout } = slice.actions;

export default slice.reducer;
