import { createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { lightTheme } from '../theme/theme';

interface themeState {
    theme: DefaultTheme
}

const initialState: themeState = {
    theme: lightTheme
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

    }
})

const {reducer, actions} = themeSlice;

export default reducer;