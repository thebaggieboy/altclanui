import {React, useState, useEffect} from 'react'

import HeaderTab from './../components/headers/HeaderTab'
import Category from './../components/Category'

const categories = [
  // More categories...
]

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchQuery !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
   
  <div className="p-5 m-2 ">
      <div className="mx-auto ">

<form className="flex items-center" >   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
         
        </div>
        <input type="text" onChange={handleSearchChange} value={searchQuery} id="simple-search" className="bg-gray-50 p-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="brand, merch, category" required/>
    </div>
    <button type="submit" className="p-5 ml-2 text-sm font-medium text-dark bg-black rounded-lg border border-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-black">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>

    </div>

    <br/><br/>

    <div className="mt-20 pt-10 p-10 search-results">
    <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
     <br/>
    
  </div>
  )
}
