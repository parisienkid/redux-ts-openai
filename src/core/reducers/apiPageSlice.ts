import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface apiState {
    pricing: number,
    oldPricing: number,
    tabs: {
        gpt3ActiveTab: number,
        codexActiveTab: number,
    }
}

const initialState: apiState = {
    pricing: 0,
    oldPricing: 0,
    tabs: {
        gpt3ActiveTab: 1,
        codexActiveTab: 1,
    }
}

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        changeActiveTabGPT: (state, action) => {
            state.tabs.gpt3ActiveTab = +action.payload
        },
        changeActiveTabCodex: (state, action) => {
            state.tabs.codexActiveTab = +action.payload
        }
    },
    extraReducers: (builder) => {

    }
})

const {reducer, actions} = apiSlice;

export const {
    changeActiveTabCodex,
    changeActiveTabGPT
} = actions;

export default reducer;