import React, { useState, useEffect } from 'react';
import SearchComponent from '../SearchComponent';
import PublishersCards from './PublishersCards';

const NoData = () => <strong>Sorry... No publishers found. try reloading the page or wait for some time.</strong>

const Publishers = ({ publishers = [] }) => {
    const [publishersList, setPublishers] = useState(publishers)

    const setSearchTerm = (term) => {
        if (!term || term === '') return
        const newArr = publishers.filter( publisher => publisher?.toLowerCase().includes(term?.toLowerCase()))
        setPublishers(newArr)
    }

    const handleReset = () => {
        setPublishers(publishers)
    }

    return (
        <>
            <SearchComponent setSearchTerm={setSearchTerm} handleReset={handleReset} />
            {
                publishersList.length === 0
                    ? <NoData />
                    : <PublishersCards publishers={publishersList} />
            }
        </>

    )
}

export default Publishers

