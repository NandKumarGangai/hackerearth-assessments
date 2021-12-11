import { configureStore } from '@reduxjs/toolkit'
import { chartDataApi } from '../services/chartDataApi'
import { chartsSlice } from '../features/chartsData'

export const store = configureStore({
    reducer: {
        [chartDataApi.reducerPath]: chartDataApi.reducer,
        [chartsSlice.name]: chartsSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(chartDataApi.middleware),
})