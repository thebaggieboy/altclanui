import React from 'react';


export async function getServerSideProps(context) {
    const id = context.params.id
    const res = await fetch(`https://altclan-brands-api-1-1.onrender.com/api/communities/${id}`)
    //const res = await fetch(`http://127.0.0.1:8000/api/brand_profile/${id}`);
    const data = await res.json()
    console.log(data)
  
    return {
      props: {brand:data}
    }
  
  }
  
const Id = () => {
    return (
        <div>
            <div className="ml-5 mt-2">
   <button type="button" onClick={()=> router.back()} class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-black transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    <span>Go back</span>
</button>
   </div>
            <section>
                <div className="text-center">
                    <button style={{float:'right'}} className="bg-black text-white">
                        Make a post
                    </button>
                </div>
                <h2 className='text-black font-semibold'>Community Name</h2>
                <p>Community Bio</p>
            </section>
            
        </div>
    );
}

export default Id;
