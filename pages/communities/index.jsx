import React from 'react'

export default function communities() {
  return (
    <>
    <h1 className='font-semibold ml-10 text-2xl pt-3'>Explore Communities</h1>
    <h2 className='font-semibold ml-10 text-1xl pt-3'>Recommended for you</h2>
<div class="grid p-10 grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

 
  <div
    class="me-4 block border rounded-lg bg-white bg-surface-dark  shadow-secondary-1 text-surface">
    <div class="p-6">
      <span><img class="w-10 h-10 rounded-full" src="/alteclan_logo.jpg" alt="Rounded avatar"/> <h5
        class="text-sm font-sm leading-tight">
       Gothic Wears
      </h5>
      </span>
    
      
      <button className='p-1' style={{backgroundColor:'black', color:'white', borderRadius:30, width:60, float:'right'}}>Join</button> <br />
      <p class="mt-4  text-xs">
        A community connecting lovers of goth clothing
      </p>
   
    </div>
  </div>
 

   
</div>
    </>
  )
}
