import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchChartsData, selectChartsData, updateChartsDataItem } from '../../features/chartsData'
import Footer from '../Footer'
import Header from '../Header'
import Loader from '../Loader'
import BarChartWrapper from './BarChartWrapper'
import PieChartWrapper from './PieChartWrapper'
import './style.css'

const Dashboard = () => {
    const dispatch = useDispatch()
    const processedChartsData = useSelector(selectChartsData)

    const [chartsData, setChartsData] = useState({})
    const [chartTypes, setChartTypes] = useState([])

    useEffect(() => {

        if (!processedChartsData || Object.keys(processedChartsData).length === 0) {
            dispatch(fetchChartsData())
        }
        setChartsData(processedChartsData)
        setChartTypes(Object.keys(processedChartsData))

    }, [processedChartsData])

    const updateChartsData = (chartValues, type, itemIndex) => {
        dispatch(updateChartsDataItem({ chartValues, type, itemIndex }))
    }

    return (
        <div className='chartContainer'>
            <Header />
            {chartTypes.length === 0 ? <Loader /> : null}
            {
                chartTypes.map(type => {
                    return chartsData[type]?.map((data, idx) => {
                        if (type === 'Bar') {
                            return <div className='barItem' key={`barchart-${idx}-${data?.length}`}>
                                <BarChartWrapper
                                    data={data}
                                    type={type}
                                    itemIndex={idx}
                                    updateChartsData={updateChartsData}
                                />
                            </div>
                        }
                        if (type === 'Pie') {
                            return <div className='barItem' key={`piechart-${idx}-${data?.length}`}>
                                <PieChartWrapper
                                    data={data}
                                    type={type}
                                    itemIndex={idx}
                                    updateChartsData={updateChartsData}
                                />
                            </div>
                        }
                    })
                })
            }
            <Footer />
        </div>
    )
}

export default Dashboard
