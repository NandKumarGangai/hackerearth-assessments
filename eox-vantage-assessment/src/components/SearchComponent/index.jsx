import React, { useState } from 'react'

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
            <div className='w-full flex justify-center space-x-2 p-4' >
                <input
                    className='p-1 border rounded md:w-3/6 w-5/6'
                    type="text" value={key}
                    onChange={(e) => setKey(e?.target?.value)}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            handleSearch()
                        }
                    }}
                    placeholder='Type keywrds or search specific news....'
                />
                <button
                    onClick={handleSearch}
                    className="flex items-center justify-center px-4 border rounded">
                    <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                </button>
                <button
                    onClick={reset}
                    className="flex items-center justify-center px-4 border rounded">
                    <strong className="text-xl -mt-1 text-center cursor-pointer alert-del" >&times;</strong>
                </button>
            </div>
    )
}

export default SearchComponent
