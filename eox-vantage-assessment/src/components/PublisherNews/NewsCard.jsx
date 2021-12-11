import React from 'react'
import './style.css'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const NewsCard = ({ news = {} }) => {
    const { TITLE, URL, PUBLISHER, TIMESTAMP } = news
    const date = new Date(TIMESTAMP)

    return (
        <div className="newsContainer card">
            <div className="wrapper">
                <div className="date">
                    <span className="day">{`${date.getDate()} `}</span>
                    <span className="month">{`${MONTHS[date.getMonth()]} `}</span>
                    <span className="year">{`${date.getFullYear()}`}</span>
                </div>
                <div className="data">
                    <div className="content">
                        <span className="author">{PUBLISHER}</span>
                        <h1 className="title">{TITLE}</h1>
                        <a href={URL} target='_blank' className='text'>Read full news....</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsCard
