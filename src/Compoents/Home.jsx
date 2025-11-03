import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
// import Resume from './Resume'
import ItemSlider from './ItemSlider';
import BlogPost from './BlogPost';
import Navigation from './Navigation';
// import Apple from '../Photo/Apple-.png'
import Apple2 from '../Photo/screen-macos15-large_2x.png'
import vid1 from '../Video/coding1.mp4'
import vid2 from '../Video/coding3.mp4'
// import AllProject from './AllProject';
import AboutMe from './AboutMe';
import HomeGig from './MyGig/HomeGig';
import HomeProject from './Project/HomeProject';
// import Motion from './Motion';

const Home = () => {
  return (
    <>
<Navigation/>

      <div className='bg-[#e0f7fa] text-neutral-800 p-10'>

      
        <section className=''>
          <div className='mt-20 p-6'>
            <div>
              <div className='flex justify-center'>
                <p className='h-8 border-1 w-fit rounded-2xl p-3 flex justify-center items-center bg-black/15 text-white'>Font-End React.js Developer</p>
              </div>
              <div className='mt-5'>
                <h1 className='text-4xl md:text-6xl font-bold  flex justify-center'>Hello, I am Anup </h1>
                <div className='lg:flex lg:justify-center lg:items-center'>
                  <h1 className='text-4xl md:text-6xl font-bold  flex justify-center'>I Build Mordern Web</h1>
                  <h1 className='text-4xl md:text-6xl font-bold  flex justify-center'>Experiences</h1>
                </div>
              </div>
              <div className='mt-5'>
                <h1 className='md:text-lg  flex justify-center items-center'>Transforming ideas into exceptional digital </h1>
                <h1 className='md:text-lg  flex justify-center items-center'> withclean code and creative design. Specializing in </h1>
                <h1 className='text-lg  flex justify-center items-center'>React and Font-End development.</h1>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-3'>
            <div>
              <Link to={'/resume'}>
                <button className='h-10 w-40 border-1 border-blue-900 text-white bg-neutral-400 transform hover:scale-105 duration-300 hover:shadow-md hover:shadow-gray-500 font-bold hover:bg-neutral-500 p-2 rounded-xl flex justify-center items-center'>Resume</button>
              </Link>
            </div>
            <div>
              <Link to={'/allproject'}>
                <button className='h-10 w-40 hover:border-1  bg-pink-500 hover:bg-rose-500 bg-gradient-to-br  ransform hover:scale-105 font-bold  p-2 rounded-xl flex justify-center items-center transition-all duration-300'>View My Work</button>
              </Link>
            </div>
          </div>

        </section>

        <section>
          <div className='h-full w-full'>
            <div className='grid place-items-center h-full w-full p-4 md:p-8'>
              <div className='grid place-items-center w-auto h-auto relative '>
                <img src={Apple2} alt="" className='h-[90%] w-full  z-0' />
                <div className='h-[75%] -mt-2 w-[90%] md:h-[78%] md:w-[95%] md:-mt-3 grid grid-cols-2 gap-2 absolute overflow-hidden'>
               <video src={vid1} autoPlay loop muted className='object-cover h-full w-full rounded-md'></video>
               <video src={vid2} autoPlay loop muted className='h-full w-full object-cover rounded-md'></video>
                </div>
              </div>
            </div>
          </div>

        </section>
        <AboutMe/>


{/* My GIG */}
<HomeGig/>


<ItemSlider/>

{/* Project  */}
<HomeProject/>



<BlogPost/>

{/* <AllProject/> */}
        {/* <MyGig /> */}
        {/* <ItemSlider /> */}
        {/* <Project /> */}
        {/* <BlogPost /> */}

        
      </div>
  
    </>
  )
}

export default Home