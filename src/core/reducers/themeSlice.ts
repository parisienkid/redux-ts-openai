import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { mainTheme } from '../theme/theme';

// interface themeState {
//     theme: DefaultTheme
// }

const initialState = {
    theme: mainTheme
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

export const {changeTheme} = actions;

export default reducer;