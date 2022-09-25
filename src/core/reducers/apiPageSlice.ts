import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useHttp } from '../hooks/http-hook';

interface apiState {
    statusData: string
    pricing: IPricing[],
    tabs: {
        gpt3ActiveTab: number,
        codexActiveTab: number,
    }
}

export interface IPricing {
    name: string,
    addition: string,
    price: number
}


const initialState: apiState = {
    statusData: 'waiting',
    pricing: [],
    tabs: {
        gpt3ActiveTab: 1,
        codexActiveTab: 1,
    }
}

export const FetchApiPricing = createAsyncThunk(
    "api/getPricing",
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/api")
    }
)

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
        builder
            .addCase(FetchApiPricing.pending, state => {state.statusData = 'loading'})
            .addCase(FetchApiPricing.fulfilled, (state, action) => {
                state.pricing = action.payload.pricing
                state.statusData = 'idle'
            })
            .addCase(FetchApiPricing.rejected, state => {state.statusData = 'error'})
    }
})

const {reducer, actions} = apiSlice;

export const {
    changeActiveTabCodex,
    changeActiveTabGPT
} = actions;

export default reducer;