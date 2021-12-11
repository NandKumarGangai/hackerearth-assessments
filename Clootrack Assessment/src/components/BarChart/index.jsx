import React, { useState, useEffect } from 'react';
import {
    BarChart, Bar, ResponsiveContainer, CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from 'recharts';

const BarChartComponent = ({ data }) => {

    const [dataToRender, setData] = useState([])

    useEffect(() => {
        const processedData = data?.map((item, idx) => ({
            name: `Bar-${idx}`,
            value: item
        }))
        setData(processedData)

    }, [data])
    return (
        <>
            {
                dataToRender?.length > 0 ?
                    (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dataToRender}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    ) : null
            }
        </>

    )
}

export default BarChartComponent

