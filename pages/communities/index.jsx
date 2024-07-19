import React from 'react'

export default function communities() {
  return (
    <>
<div style={{lineHeight:'100%', letterSpacing:2}}>
<div className="">
<h1 className='font-semibold ml-10 text-2xl pt-5'>Explore Communities</h1>
<h2 className='font-semibold ml-10 text-1xl pt-10'>Recommended for you</h2></div> <br />
<div class="grid p-10 grid-cols-1 bg-gray-50 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

 
  <div
    class="me-4 hover:bg-black  hover:text-white shadow-sm shadow-black block border rounded-lg bg-white bg-surface-dark  shadow-secondary-1 text-surface">
    <div class="p-3">

    <button className='py-1 text-yellow-100' style={{backgroundColor:'black', color:'beige', borderRadius:30, width:60, float:'right'}}>Join</button> <br />
     <div className='flex'>
     <span><img class="w-10 h-12 rounded-full" src="/alteclan_logo.jpg" alt="Rounded avatar"/> </span> <span className='font-bold text-lg pt-3 pl-2'>Gothic Wears</span>
     </div>
      <p className='text-sm font-thin ml-12'>13K members</p>
     
   
      
    
      <p class=" text-xs">
        A community connecting lovers of goth clothing
      </p>
   
    </div>
  </div>
 

   
</div>
</div>
    </>
  )
}
