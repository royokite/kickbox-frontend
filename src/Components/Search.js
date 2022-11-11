import React from 'react'

function Search({search, setSearch}) {
  return (
    <div className='grid items-center p-5 w-1/3'>
      <div className='flex border border-purple-200 rounded'>
        <input
          type={"text"}
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          placeholder='Search...' 
          />       
      </div>
    </div>
    )
  }
  
  export default Search
