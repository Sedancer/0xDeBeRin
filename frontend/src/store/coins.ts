import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '@/api';

export const getCoins = createAsyncThunk('coins/getCoins', async (_, { rejectWithValue }) => {
    try {
        const response = await API.fetchCoin();
        return response.data;
    } catch (e) {
        return rejectWithValue({
            error: {
                message: 'error',
            },
        });
    }
});

const initialStateMetadata = {
    status: 'idle',
    error: null,
};


const slice = createSlice({
    name: 'coins',
    initialState: {
        data: [],
        ...initialStateMetadata

    },
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(getCoins.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(getCoins.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.data = action.payload;
                })
                .addCase(getCoins.rejected, (state, action) => {
                    console.log('error.payload', action);
                    state.status = 'failed';
                })
        }
});

export default slice.reducer;
