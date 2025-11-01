import React, { useState } from 'react'
import { Link } from 'react-router';
import GigData from './GigData.json'

const HomeGig = () => {
  const DataShow=3;
  const [itemShow,setitemShow]=useState(DataShow)
  return (
    <>

    <div className='p-4 h-full w-full'>
        <div className='mt-16 grid place-items-center gap-4 '>
          <div className='text-3xl font-semibold text-neutral-800'>My Gig</div>
          <div className='md:flex text-neutral-800/80'>
          <p>Professional development services I offer with fixed pricing and clear deliverables.</p>
          </div>
        </div>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center xl:px-28 py-20'>
     {GigData.slice(0,itemShow).map((post)=>(

          <div className='h-[400px] hover:shadow-xl shadow-cyan-300 transition duration-300  hover:-translate-y-5 rounded-2xl bg-gradient-to-br from-purple-200 to-teal-300 w-[95%] p-3'>
            <div className=' h-20'>
              <div className='h-16 w-16 bg-amber-200 rounded-full'> </div>
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
                  <div  className='text-neutral-800'> days</div>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <button className='md:h-10 md:w-full py-2 px-6 rounded-full text-neutral-800 font-bold text-xl bg-gradient-to-r from-pink-500 to-teal-500 '>Vew More</button>
            </div>
            </div>
     ))}
            <Link to={'/home/mygig'}>
            <div className='h-10 w-72 rounded-xl mt-8 font-bold grid place-content-center place-items-center text-white border-1 bg-gray-500 hover:bg-gray-700 text-xl hidden md:flex lg:hidden'>
              See All Gig
            </div>
            </Link>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex lg:flex justify-center'>
            <Link to={'/home/mygig'}>
            <div className='flex h-10 w-72 rounded-xl mt-8 font-bold text-white border-1 justify-center items-center md:hidden lg:flex bg-gray-500 hover:bg-gray-700 text-xl'>
              See All Gig
            </div>
            </Link>
          </div>
      </div>
    </>
  )
}

export default HomeGig