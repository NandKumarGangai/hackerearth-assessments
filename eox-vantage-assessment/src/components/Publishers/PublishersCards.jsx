import React from 'react'
import { Link } from 'react-router-dom'

const PublishersCards = ({ publishers = [] }) => {
    return (
        <div className='flex flex-wrap justify-evenly'>
            {
                publishers.map((publisher) => {
                    return (
                        <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-1 hover:shadow-xl transition duration-300">
                            <div className="rounded-lg p-4 bg-gray-700 flex flex-col">
                                <div>
                                    <h5 className="text-white text-2xl font-bold leading-none">
                                        {publisher}
                                    </h5>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="text-lg text-white font-light hover:underline hover:text-blue-500">
                                        <Link to={`/news/${publisher}`}>
                                            Read news...
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PublishersCards
