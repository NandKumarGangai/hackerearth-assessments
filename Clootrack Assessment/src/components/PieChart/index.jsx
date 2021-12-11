import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { activeShape as renderActiveShape } from './activeShape'

const PieChartComponent = ({ data }) => {

    const [dataToRender, setData] = useState([])
    const [activeIndex, setActiveIdx] = useState(0)

    useEffect(() => {
        const processedData = data?.map((item, idx) => ({
            name: `Pie-${idx}`,
            value: item
        }))
        setData(processedData)

    }, [data])

    const onPieEnter = (_, idx) => setActiveIdx(idx)

    return (
        <>
            {
                dataToRender?.length > 0 ?
                    (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={dataToRender}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : null
            }
        </>

    )
}

export default PieChartComponent

