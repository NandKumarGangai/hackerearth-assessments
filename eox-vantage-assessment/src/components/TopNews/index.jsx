import React, { useState } from 'react'
import Navbar from '../NavBar'
import NewsCard from '../PublisherNews/NewsCard'
import SearchComponent from '../SearchComponent'
import './style.css'


const Top100News = ({ topNews = [] }) => {
    const [top100News, setTopNews] = useState(topNews.length > 100 ? topNews.slice(0, 100) : topNews)

    const setSearchTerm = (term) => {
        if (!term || term === '') return
        const newArr = topNews.filter( news => news?.TITLE?.toLowerCase().includes(term?.toLowerCase()))
        setTopNews(newArr.length > 100 ? newArr.slice(0, 100) : newArr)
    }

    const handleReset = () => {
        setTopNews(topNews.length > 100 ? topNews.slice(0, 100) : topNews)
    }

    return (
        <div className=''>
            <Navbar />
            <SearchComponent setSearchTerm={setSearchTerm} handleReset={handleReset} />
            {
                top100News.map( news => <NewsCard news={news} key={news?.ID}/>)
            }
        </div>
    )
}

export default Top100News
