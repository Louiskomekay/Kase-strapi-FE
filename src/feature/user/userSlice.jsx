import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user')) || null;
}

const initialState = {
    user: getUserFromLocalStorage(),
    theme: 'dark'
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const user = { ...action.payload.user, token: action.payload.jwt };
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logOutUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            toast.success('Logged out successfully');
        },
        toggleTheme: (state, action) => {
            console.log('toggle theme');
        },
    }
});

export const { loginUser, logOutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;