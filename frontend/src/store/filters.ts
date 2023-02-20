import { createSlice } from '@reduxjs/toolkit';
 

const initialStateMetadata = {
    status: 'idle',
    exchanges: [],
    coins: [],
    isFilterApply: true,
    error: null,
};

// interface ActionType {
//     exchanges: [string],
//     coins: [string]
// }

const slice = createSlice({
    name: 'filter',
    initialState: {
        ...initialStateMetadata
    },
    reducers: {
        clearFilter(state) {
            state.exchanges = []
            state.coins = []
        },
        setExchanges(state, action) {
            state.exchanges = action.payload
            state.isFilterApply = false
        },
        setCoins(state, action) {
            state.coins = action.payload
            state.isFilterApply = false
        },
        onApplyClick(state){
            state.isFilterApply = true
        }
    },
    extraReducers: {}
});

export const { clearFilter, setExchanges, setCoins, onApplyClick } = slice.actions

export default slice.reducer;
