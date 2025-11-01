import React, { useState } from 'react'
import { Link } from 'react-router';
import ProductData from './ProjectData.json'

const AllProject = () => {
  const Showitem =6;
  const[itemShow,setitemShow]=useState(Showitem)
  return (
    <>
   


     <div>
 

      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-purple-400">My Projects</h2>
          <p className="mt-2 text-sm text-gray-300">
            Explore my portfolio of web development projects showcasing my skills in frontend, backend, and full-stack development.
          </p>
        </div>


        <div className=" w-full flex flex-col lg:flex-row   items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full md:w-1/2 px-4 py-2 bg-gray-900 text-white border border-purple-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-1 bg-gradient-to-r to-cyan-400 from-violet-500 text-white rounded-xl hover:shadow-md hover:shadow-sky-300 transition duration-300 hover:scale-105">All Projects</button>
            <button className="px-4 py-1 bg-gray-800 bg-gradient-to-r from-orange-300 to-pink-400 hover:bg-gray-700 rounded-xl hover:shadow-md hover:shadow-pink-300 transition duration-300 hover:scale-105">Frontend</button>
            <button className="px-4 py-1 bg-gray-800 hover:bg-gray-700 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl hover:shadow-md hover:shadow-violet-400 transition duration-300 hover:scale-105">Full Stack</button>
            <button className="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded-xl bg-gradient-to-r from-rose-400 to-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-400 transition duration-300 hover:scale-105">AI & Machine Learning</button>
          </div>
        </div>


        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center xl:p-32 pt-20'>
     
       {ProductData.slice(0,itemShow).map((post)=>(
          <div className='h-[410px] rounded-xl backdrop-blur-2xl bg-neutral-900/20 border-b-1 hover:border-l-1 hover:border-r-1 hover:shadow-lg hover:shadow-gray-400 transition ease-in-out hover:-translate-y-2 duration-300 text-white w-[90%]'>
            <div className='h-44  bg-amber-200 rounded-t-xl'>

            </div>
            <div className='p-3'>
              <div className='mt-3'>
                <h1 className='text-xl font-semibold  text-white'>{post.Name}</h1>
                <p className=' text-white/80 mt-1'>{post.Description}</p>
              </div>
              <div className='flex mt-4 gap-2 text-xs '>
                <span class="bg-gray-700 px-2 py-1 rounded">Next.js</span>
                <span class="bg-gray-700 px-2 py-1 rounded">TypeScript</span>
                <span class="bg-gray-700 px-2 py-1 rounded">MongoDB</span>
                <span class="bg-gray-700 px-2 py-1 rounded">Stripe</span>
              </div>
             <div className='flex justify-between gap-7 mt-6'>
                <div className='h-9 rounded-md border-2 transition duration-300 w-full flex justify-center items-center font-bold text-md hover:bg-cyan-200 hover:text-black border-cyan-200 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-300 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 active:bg-cyan-400 transform hover:scale-105'>Code</div>
                <div className='h-9 rounded-md  w-full transition duration-300 border-cyan-200 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-300 flex justify-center  text-white items-center font-bold text-md bg-cyan-300 hover:bg-cyan-200 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 active:bg-cyan-400 transform hover:scale-105'>Demo</div>
              </div>
            </div>
          </div>
       ))}
          
          
         

          {/* <div class="bg-gray-900 p-4 rounded-lg shadow-lg">
            <div class="relative mb-4 h-40 bg-gray-800 rounded flex items-center justify-center">
              <span class="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
              <span class="text-gray-500">[Image]</span>
            </div>
            <h3 class="text-lg font-semibold">E-Commerce Platform</h3>
            <p class="text-sm text-gray-400 mb-2">A full-stack e-commerce solution with Next.js, Stripe, and MongoDB</p>
            <div class="flex flex-wrap gap-1 text-xs mb-3">
              <span class="bg-gray-700 px-2 py-1 rounded">Next.js</span>
              <span class="bg-gray-700 px-2 py-1 rounded">TypeScript</span>
              <span class="bg-gray-700 px-2 py-1 rounded">MongoDB</span>
              <span class="bg-gray-700 px-2 py-1 rounded">Stripe</span>
            </div>
            <div class="flex gap-2">
              <button class="flex-1 bg-gray-800 hover:bg-gray-700 text-sm px-2 py-1 rounded">💻 Code</button>
              <button class="flex-1 bg-purple-600 hover:bg-purple-500 text-sm px-2 py-1 rounded">🚀 Demo</button>
            </div>
          </div> */}








          <div className='md:flex lg:hidden justify-center sm:hidden'>
            <div className='h-10 w-72 rounded-xl mt-8 font-bold text-white border-1 flex justify-center items-center bg-gray-500 hover:bg-gray-700 text-xl'>
              See All Project
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default AllProject