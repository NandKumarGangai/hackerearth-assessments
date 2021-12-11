import React, { useState } from 'react'
import './style.css'

const SearchComponent = ({ setSearchTerm, handleReset }) => {
    const [key, setKey] = useState('')

    const handleSearch = () => {
        setSearchTerm(key)
    }

    const reset = () => {
        setKey('')
        handleReset()
    }

    return (
        <div className='searchWrapper' >
            <div style={{ margin: '0 1rem' }}>
                <input
                    style={{ padding: '0.4rem', width: '50vw', borderRadius: '5px', outline: 'none' }}
                    type="text" value={key}
                    onChange={(e) => setKey(e?.target?.value)}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            handleSearch()
                        }
                    }}
                    placeholder='Type keywrds or search specific news....' />
            </div>
            <div style={{ margin: '0 1rem' }}>
                <input
                    style={{ padding: '0.4rem', borderRadius: '5px', outline: 'none', cursor: 'pointer' }}
                    type="button"
                    onClick={handleSearch}
                    value="SEARCH" />
            </div>
            <div style={{ margin: '0 1rem' }}>
                <input
                    style={{ padding: '0.4rem', borderRadius: '5px', outline: 'none', cursor: 'pointer' }}
                    type="button"
                    onClick={reset}
                    value="RESET" />
            </div>
        </div>
    )
}

export default SearchComponent
