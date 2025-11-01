import React, { useState } from 'react'
import { Link } from 'react-router';
import ProductData from './ProjectData.json'

const HomeProject = () => {
  const Showitem=3;
  const [itemShow,setitemShow]=useState(Showitem)
  return (
    <>
    <section>
  <div>
        <div className='p-4 h-full w-full'>
        <div className='mt-16 grid place-items-center gap-4 '>
          <div className='text-4xl font-semibold text-neutral-800'>Featured Projects</div>
          <div className=' text-neutral-800/80'>
          <p>Professional development services I offer with fixed pricing and clear deliverables.</p>
          </div>
        </div>
        <div className='grid gap-7 md:grid-cols-2 lg:grid-cols-3 place-items-center xl:p-20 pt-20'>
           {ProductData.slice(0,itemShow).map((post)=>(

            <div className='min-h-[420px]  rounded-2xl bg-black/20 w-[90%] lg:w-[95%] hover:shadow-xl transition ease-in-out hover:-translate-y-3 duration-300 hover:shadow-blue-400'>
            <div className='h-44 bg-amber-200 rounded-t-lg'>
              
              </div> 
              <div className='p-5'>
              <div className='mt-3'>
                <h1 className='text-xl font-semibold text-neutral-800'>Real-time Chat Application</h1>
                <p className='text-neutral-800/80 mt-1'>Chat app with real-time messaging using Socket.io and Next.js</p>
              </div>
              <div className='flex mt-3 gap-2 text-xs text-white'>
                 <span class="bg-gray-700 px-2 py-1 rounded">Next.js</span>
                  <span class="bg-gray-700 px-2 py-1 rounded">TypeScript</span>
                  <span class="bg-gray-700 px-2 py-1 rounded">MongoDB</span>
                  <span class="bg-gray-700 px-2 py-1 rounded">Stripe</span>
              </div>
              <div className='flex justify-between gap-7 mt-6'>
                <div className='h-9 rounded-md border-2 transition duration-300 w-full flex justify-center items-center font-bold text-md hover:bg-cyan-200 hover:text-black border-cyan-200 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-300 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 active:bg-cyan-400 transform hover:scale-105'>Code</div>
                <div className='h-9 rounded-md  w-full transition duration-300 border-cyan-200 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-300 flex justify-center text-neutral-800 items-center font-bold text-md bg-cyan-300 hover:bg-cyan-200 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 active:bg-cyan-400 transform hover:scale-105'>Demo</div>              
              </div>
            </div>
            </div>
           ))}
             <div className='md:flex lg:hidden justify-center hidden'>
              <Link to={'/home/allproject'}>
            <div className='h-10 w-72 rounded-xl mt-8 font-bold text-white border-1 flex justify-center items-center bg-gray-500 hover:bg-gray-700 text-xl'>
              See All Project
            </div>
            </Link>
          </div>
            
          </div>
          <div className='flex lg:flex md:hidden justify-center'>
            <Link to={'/home/allproject'}>
            <div className='h-10 w-72 rounded-xl mt-8 font-bold text-white border-1 flex justify-center items-center bg-gray-500 hover:bg-gray-700 text-xl'>
              See All Project
            </div>
            </Link>
          </div>
      </div>
      </div>
</section>
    </>
  )
}

export default HomeProject