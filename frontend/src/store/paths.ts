import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '@/api';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

interface ExpandedArgI {
    coins?: any;
    exchanges?: any;
}

export const getPaths = createAsyncThunk('paths/getPaths', async (_, { getState, rejectWithValue }) => {
    try {
        const state = getState();
        const { paths, filters } = state as RootState;
        const { isFilterApply, coins, exchanges } = filters;
        let expandedArg = {} as ExpandedArgI;
        if (isFilterApply) {
            if (coins.length > 0) expandedArg.coins = coins;
            if (exchanges.length > 0) expandedArg.exchanges = exchanges;
        }
        const arg = {
            page: paths.page,
            rowsPerPage: paths.rowsPerPage,
            order: paths.order,
            orderBy: paths.orderBy,
        };

        const response = await API.fetchPath({ ...arg, ...expandedArg });
        return response.data;
    } catch (e) {
        return rejectWithValue({
            error: {
                message: 'error',
            },
        });
    }
});

const DEFAULT_PAGE = 0;
const DEFAULT_LIMIT = 20;
const DEFAULT_LIMITS = [DEFAULT_LIMIT, 50, 100];

type rowsPerPageType = 20 | 50 | 100 | number;

type OrderType = 'asc' | 'desc';
export type OrderByType = 'exchange' | 'path' | 'profit' | 'duration' | 'min_profit' | 'max_profit' | 'status';

interface StateMetadata {
    data: [];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    count: number;
    order: OrderType;
    // orderBy: OrderByType;
    orderBy: string;
    page: number;
    rowsPerPage: rowsPerPageType;
    defaultLimits: [number];
}

const initialStateMetadata = {
    status: 'idle',
    data: [],
    order: 'desc',
    orderBy: 'created_at',
    count: -1,
    error: null,
    page: DEFAULT_PAGE,
    rowsPerPage: DEFAULT_LIMIT,
    defaultLimits: DEFAULT_LIMITS,
} as unknown as StateMetadata

const slice = createSlice({
    name: 'paths',
    initialState: {
        ...initialStateMetadata
    },
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        setRowsPerPage(state, action: PayloadAction<rowsPerPageType>) {
            state.rowsPerPage = action.payload;
            state.page = 0;
        },
        setOrder(state, action: PayloadAction<string>) {
            const { orderBy, order } = state;
            state.orderBy = action.payload;
            const isAsc = orderBy === action.payload && order === 'asc';
            state.order = isAsc ? 'desc' : 'asc';
        }
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(getPaths.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(getPaths.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.data = action.payload.data;
                    state.count = action.payload.total;
                })
                .addCase(getPaths.rejected, (state) => {
                    state.status = 'failed';
                })
        }

});

export const { setPage, setRowsPerPage, setOrder } = slice.actions

export default slice.reducer;
