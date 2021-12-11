import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    const [selected, setSelected] = useState({
        news: true,
        publishers: false
    })

    return (
        <nav className='nav'>
            <ul>
                <li className='nav-item'>
                    <Link
                        onClick={() => setSelected({ news: true, publishers: false })}
                        className={`nav-link ${selected.news ? 'active' : ''}`}
                        to='/top-news'>
                        {'Top News'}
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        onClick={() => setSelected({ news: false, publishers: true })}
                        className={`nav-link ${selected.publishers ? 'active' : ''}`}
                        to='/publishers'>
                        {'All Publishers'}
                    </Link>
                </li>
            </ul>
            <hr style={{ marginBottom: '0.25rem'}}/>
        </nav>
    )
}

export default Navbar
