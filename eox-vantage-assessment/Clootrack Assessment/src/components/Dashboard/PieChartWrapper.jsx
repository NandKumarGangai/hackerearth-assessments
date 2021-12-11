import React from 'react'
import PieChart from '../PieChart'
import UpdateChartValues from '../UpdateChartValues'

const PieChartWrapper = ({ data, itemIndex, type, updateChartsData }) => {
    return (
        <>
            <h2>{`Pie Chart No. ${itemIndex}`}</h2>
            <div style={{ height: '20rem' }}>
                <PieChart data={data} />
            </div>
            <div>
                <h4>Play with chart: </h4>
                <UpdateChartValues
                    itemId={`piechart-${itemIndex}-${data?.length}`}
                    data={data}
                    type={type}
                    itemIndex={itemIndex}
                    updateChartsData={updateChartsData}
                />
            </div>
        </>
    )
}

export default PieChartWrapper
