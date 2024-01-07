import React from 'react';
import { io } from "socket.io-client";


const Communities = () => {
    return (
      <>
      
        <div className="p-5">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Explore communities</h1>
        <p class="mb-6 text-xs font-normal text-gray-500 ">
            
        Communities are independent hubs, galleries & spaces on Altclan that curate, promote, and sell artworks.
        
            .</p>
        <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Top Communities</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Trending</a>
        </li>
       
    
    </ul>
</div>
    </div>

        

<section className='p-5'>




</section>

      </>
    );
}

export default Communities;
