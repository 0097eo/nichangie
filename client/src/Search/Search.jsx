import React, {useState} from 'react'

const Search = () => {
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
  return (
    <div className='searchbar'>
        <input type='text'
         placeholder='find a fundraiser'
         value={searchInput}
         onChange={handleChange}
        ></input>
    </div>
  )
}

export default Search