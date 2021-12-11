import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const PublishersCards = ({ publishers = []}) => {
    
    return (
        <div className='cards-container'>
            {
                publishers.map((publisher, idx) => {
                    return (
                        <div className='cards-wrapper' key={`${publisher}-${idx}`}>
                            <h2>{publisher}</h2>
                            <button className='btn'>
                                <Link className='card-link' to={`/news/${publisher}`}>
                                    Read news...
                                </Link>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PublishersCards
