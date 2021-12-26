import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [selected, setSelected] = useState({
        news: true,
        publishers: false
    })
    return (
        <>
            <div className='py-4 px-8 bg-neutral-800 text-gray-100 flex justify-between'>
                <h1 className='text-2xl font-bold'>EOX Vantage news</h1>
                <nav className='pt-1'>
                    <ul className='max-w-7xl flex justify-evenly space-x-8'>
                        <li className='no-underline'>
                            <Link
                                onClick={() => setSelected({ news: true, publishers: false })}
                                className={`no-underline text-slate-200 hover:text-white ${selected.news ? 'text-white' : ''}`}
                                to='/top-news'>
                                {'Top News'}
                            </Link>
                        </li>
                        <li className='no-underline'>
                            <Link
                                onClick={() => setSelected({ news: false, publishers: true })}
                                className={`no-underline text-slate-200 hover:text-white ${selected.publishers ? 'text-white' : ''}`}
                                to='/publishers'>
                                {'All Publishers'}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <hr />
        </>
    )
}

export default Header
