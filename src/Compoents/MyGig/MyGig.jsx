import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router';
import GigData from './GigData.json'

const MyGig = () => {
const DefaultItems=6;
const [itemShow,setItemShow]=useState(DefaultItems)
const ClickItem=4
const ClickHandaler=()=>{
  setItemShow(prevusItem=>prevusItem + ClickItem)
}
  return (
    <>
    <div>
    <div className='p-4 h-full w-full'>
      <div className='mt-16 grid place-items-center gap-4 '>
        <div className='text-3xl font-semibold text-neutral-800'>My Gig</div>
        <div className='md:flex text-neutral-800/80'>
        <p>Professional development services I offer with fixed pricing</p>
        <p className='flex justify-center'>and clear deliverables.</p>
        </div>
      </div>
      <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center xl:px-28 py-20'>
        
          {GigData.slice(0,itemShow).map((post)=>(

          <div className='h-[400px] hover:shadow-xl shadow-cyan-300 duration-300 hover:-translate-y-5 w-[95%] p-3 bg-gradient-to-br from-purple-100 to-teal-100  rounded-xl transition-all duration-300"'>
          <div className=' h-20'>
            <div className='h-16 w-16 bg-amber-200 rounded-full'></div>
          </div>
          <div className='h-36 grid'>
            <h1 className='font-bold text-3xl text-neutral-800'>{post.Gigname}</h1>
            <p className='text-sm text-neutral-800/80'>{post.ShortDescription}</p>
          </div>
          <div className='h-20'>
            <div className='grid gap-4 mt-2'>
                <div  className='flex justify-between'>
                  <div className='font-semibold text-neutral-800/90'>Starting in</div>
                  <div className='font-bold text-lg text-neutral-800'>From {post.Price}</div>
                </div>
              <div  className='flex justify-between'>
                <div className='font-semibold text-neutral-800/90'>Delivery Time</div>
                <div className='text-neutral-800'>{post.Time} days</div>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <button class="bg-gradient-to-r from-pink-500 to-teal-500 text-white font-semibold py-2 px-6 md:h-10 md:w-full rounded-full shadow-md hover:opacity-90 transition duration-300">Vew More</button>
          </div>
          </div>
          ))}


        


          {/* {GigData.map((data)=>(
        <div className='h-[400px] hover:shadow-xl shadow-cyan-300 transition duration-300  hover:-translate-y-5 rounded-2xl bg-gradient-to-br from-purple-200 to-teal-300 w-[95%] p-3'>
          <div className=' h-20'>
            <div className='h-16 w-16 bg-amber-200 rounded-full'></div>
          </div>
          <div className='h-36 grid'>
            <h1 className='font-bold text-3xl text-neutral-800'>{data.Gigname}</h1>
            <p className='text-sm text-neutral-800/80'>Custom responsive interfaces built with React.js, 
              and modern CSS frameworks like Tailwind. Optimized 
              for performance and accessibility.</p>
          </div>
          <div className='h-20'>
            <div className='grid gap-4 mt-2'>
                <div  className='flex justify-between'>
                  <div className='font-semibold text-neutral-800/90'>Starting in</div>
                  <div className='font-bold text-lg text-neutral-800'>From {data.Price}</div>
                </div>
              <div  className='flex justify-between'>
                <div className='font-semibold text-neutral-800/90'>Delivery Time</div>
                <div  className='text-neutral-800'>{data.Time} days</div>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <button className='md:h-10 md:w-full py-2 px-6 rounded-full text-neutral-800 font-bold text-xl bg-gradient-to-r from-pink-500 to-teal-500 '>Vew More</button>
          </div>
          </div>
          ))} */}
         
        </div>
    </div>
    <div className='mb-16 flex justify-center h-full w-full'>
      <div className='flex h-9 justify-between items-center  w-72'>
        <div  className='rounded-md border-1 h-8 w-11 flex justify-center items-center hover:bg-amber-200'></div>
        <div onClick={ClickHandaler} className='rounded-md border-1 h-8 w-11 flex justify-center items-center hover:bg-amber-200'>1</div>
        <div  className='rounded-md border-1 h-8 w-11 flex justify-center items-center hover:bg-amber-200'>2</div>
        <div  className='rounded-md border-1 h-8 w-11 flex justify-center items-center hover:bg-amber-200'>3</div>
        <div  className='rounded-md border-1 h-8 w-11 flex justify-center items-center hover:bg-amber-200'></div>
      </div>
    </div>
         <div></div>
    </div>

    </>
  )
}

export default MyGig