import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface apiState {
    pricing: number,
    oldPricing: number,
}

const initialState: apiState = {
    pricing: 0,
    oldPricing: 0,
}

// export const fetchApiPrice = createAsyncThunk(

// )

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

const {reducer, actions} = apiSlice;

export default reducer;