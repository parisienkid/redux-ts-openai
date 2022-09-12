import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { lightTheme, darkTheme } from '../theme/theme';

interface themeState {
    theme: DefaultTheme
}

const initialState: themeState = {
    theme: darkTheme
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<DefaultTheme>) => {
            state.theme = action.payload
        }
    }
})

const {reducer, actions} = themeSlice;

export default reducer;