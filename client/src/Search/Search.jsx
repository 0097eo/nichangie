import React, { useState } from 'react';

const Search = ({ onSearchChange }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        onSearchChange(e.target.value);
    }

    return (
        <div className='searchbar'>
            <input type='text'
                placeholder='Find a fundraiser'
                value={searchInput}
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;
