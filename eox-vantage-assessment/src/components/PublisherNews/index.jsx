import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NewsCard from './NewsCard';
import './indexStyle.css'
import SearchComponent from '../SearchComponent';

const PublisherNews = ({ processedNews = {} }) => {
    const { publisher } = useParams();
    const [publisherNews, setPublishersNews] = useState(publisher ? processedNews[publisher] : [])

    const setSearchTerm = (term) => {
        if (!term || term === '' || !publisher) return;
        const newArr = processedNews[publisher].filter(publisher => publisher?.TITLE?.toLowerCase().includes(term?.toLowerCase()))
        setPublishersNews(newArr)
    }

    const handleReset = () => {
        setPublishersNews(publisher ? processedNews[publisher] : [])
    }
    return (
        <>
            <div className='publisherHeader'>
                <h2>{`Publisher: ${publisher}`}</h2>
                <Link to='/publishers'>All Publishers</Link>
            </div>
            <SearchComponent setSearchTerm={setSearchTerm} handleReset={handleReset} />
            <div className='publisherNewsContainer'>
                {
                    (!publisherNews || publisherNews.length === 0)
                        ? <strong>No news available....</strong>
                        : null
                }
                {
                    publisherNews.map(news => <NewsCard key={news?.ID} news={news} />)
                }
            </div>
        </>
    )
}

export default PublisherNews
