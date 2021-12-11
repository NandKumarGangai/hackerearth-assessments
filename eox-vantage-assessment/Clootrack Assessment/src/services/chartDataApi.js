import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config/config.json';

const baseUrl = config?.chartApi?.base;

const createRequest = (url) => ({
    url,
});

export const chartDataApi = createApi({
    reducerPath: 'chartDataApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getChartData: builder.query({
            query: () => createRequest(config?.chartApi?.url)
        })
    })
});

export const {
    useGetChartDataQuery
} = chartDataApi;