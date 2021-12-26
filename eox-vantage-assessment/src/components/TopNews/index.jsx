import React, { useState } from 'react'
import NewsCard from '../PublisherNews/NewsCard'
import SearchComponent from '../SearchComponent'

const Top100News = ({ topNews = [] }) => {
    const [top100News, setTopNews] = useState(topNews.length > 100 ? topNews.slice(0, 100) : topNews)

    const setSearchTerm = (term) => {
        if (!term || term === '') return
        const newArr = topNews.filter(news => news?.TITLE?.toLowerCase().includes(term?.toLowerCase()))
        setTopNews(newArr.length > 100 ? newArr.slice(0, 100) : newArr)
    }

    const handleReset = () => {
        setTopNews(topNews.length > 100 ? topNews.slice(0, 100) : topNews)
    }

    return (
        <div className='w-full'>
            <SearchComponent setSearchTerm={setSearchTerm} handleReset={handleReset} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    top100News.map(news => <NewsCard news={news} key={news?.ID} />)
                }
            </div>
        </div>
    )
}

export default Top100News
