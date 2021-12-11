import React, { useState } from 'react'
import './style.css'

const UpdateChartValues = ({ data, itemId, type, itemIndex, updateChartsData }) => {
    const [chartValues, setChartValues] = useState(data)

    const handleChange = (e, idx) => {
        const temp = [...chartValues]
        temp[idx] = Number(e?.target?.value);
        setChartValues(temp)
    }

    const handleChartDataUpdate = () => {
        updateChartsData(chartValues, type, itemIndex)
    }

    return (
        <div className='inputContainer'>
            {
                chartValues?.map((val, idx) => (
                    <div className='inputItem' key={`update-chart-${itemId}-${idx}`}>
                        <label htmlFor={`update-chart-${itemId}-${idx}`} style={{ marginRight: '0.2rem' }}>
                            {`${type}# ${idx}`}
                        </label>
                        <input
                            id={`update-chart-${itemId}-${idx}`}
                            onChange={(e) => handleChange(e, idx)}
                            value={val}
                            type='number'
                        />
                    </div>
                ))
            }
            <div className='updateBtn'>
                <button onClick={handleChartDataUpdate}>UPDATE CHART</button>
            </div>
        </div>
    )
}

export default UpdateChartValues
