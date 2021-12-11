import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import config from '../config/config.json'

const baseUrl = config?.chartApi?.base
const url = config?.chartApi?.url

export const fetchChartsData = createAsyncThunk(
    'chartsData/fetchChartsData',
    async () => {
        const response = await fetch(`${baseUrl}${url}`)
        const jsonRes = await response.json();
        return jsonRes
    }
)

export const chartsSlice = createSlice({
    name: 'chart',
    initialState: { data: {}},
    reducers: {
        updateChartsDataItem: (
            state,
            { payload}
        ) => {
            let data = state.data?.[payload?.type]
            data[payload?.itemIndex] = payload?.chartValues
            state.data = { 
                ...state.data,
                ...data?.[payload?.type]
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChartsData.fulfilled, (state, action) => {
            const processedData = {}

            action?.payload?.forEach(item => {
                if (!processedData[item.type]) {
                    processedData[item.type] = []
                }

                processedData[item.type].push(item.elements)
            })
            state.data = processedData
        })
    },
})

export const { updateChartsDataItem } = chartsSlice.actions

export default chartsSlice.reducer

export const selectChartsData = (state) => state.chart.data

