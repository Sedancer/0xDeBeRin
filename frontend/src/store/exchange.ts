import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '@/api';

interface ExchangeList {
    name: string;
}

export const getExchanges = createAsyncThunk('exchanges/getExchanges', async (_, { rejectWithValue }) => {
    try {
        const response = await API.fetchExchange();
        if (response.data.length === 0) return []
        return response.data.map(({ name }: ExchangeList) => name);
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
    data: [],
    error: null,
};

const slice = createSlice({
    name: 'exchanges',
    initialState: {
        ...initialStateMetadata
    },
    reducers: {

    },
    extraReducers:
        (builder) => {
            builder
                .addCase(getExchanges.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(getExchanges.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.data = action.payload;
                })
                .addCase(getExchanges.rejected, (state, action) => {
                    console.log('error.payload', action);
                    state.status = 'failed';
                })
        }

});

export default slice.reducer;