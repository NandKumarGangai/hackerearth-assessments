import React from 'react'
import BarChart from '../BarChart'
import UpdateChartValues from '../UpdateChartValues'

const BarChartWrapper = ({ data, itemIndex, type, updateChartsData}) => {
    return (
        <>
            <h2>{`Bar Chart No. ${itemIndex}`}</h2>
            <div style={{ height: '20rem' }}>
                <BarChart data={data} />
            </div>
            <div>
                <h4>Play with chart: </h4>
                <UpdateChartValues
                    itemId={`barchart-${itemIndex}-${data?.length}`}
                    data={data}
                    type={type}
                    itemIndex={itemIndex}
                    updateChartsData={updateChartsData}
                />
            </div>
        </>
    )
}

export default BarChartWrapper
