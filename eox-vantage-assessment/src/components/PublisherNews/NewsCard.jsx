import React from 'react'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const NewsCard = ({ news = {} }) => {
    const { TITLE, URL, PUBLISHER, TIMESTAMP } = news
    const date = new Date(TIMESTAMP)

    const formatPublisher = name => name.length > 20 ? `${name.split('').splice(0, 20).join('')}...` : name

    return (
        <>
            <div className="flex flex-col m-2">
                <div className="text-gray-100 bg-neutral-800 p-4 rounded-t-md">
                    <span className="">{`${date.getDate()} `}</span>
                    <span className="">{`${MONTHS[date.getMonth()]} `}</span>
                    <span className="">{`${date.getFullYear()}`}</span>
                </div>
                <div className="bg-neutral-200 flex-1 p-2">
                    <div className="h-full flex flex-col justify-between space-y-4">
                        <h1 className="text-xl">{TITLE}</h1>
                        <div className="flex justify-between py-2">
                            <p
                                title={PUBLISHER}
                                className="border rounded-md inline-block text-slate-50 p-1 bg-neutral-900 text-xs"
                            >
                                {formatPublisher(PUBLISHER)}
                            </p>
                            <a
                                href={URL}
                                target='_blank'
                                className='text-blue-600 text-sm hover:text-blue-800 hover:underline'>
                                {'Read full news....'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="newsContainer card">
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
            </div> */}
        </>
    )
}

export default NewsCard
