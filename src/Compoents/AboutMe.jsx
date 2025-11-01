import React from 'react'
import Anup from '../Photo/Anup.jpeg'
const AboutMe = () => {
  return (
    <>
            <section>
          <div className='md:grid md:grid-cols-2 '>
            <div className='hidden md:flex md:justify-center md:items-center'>
              <div className='h-[400px] w-[400px] border-t-1 border-l-1 border-r-1 rounded-2xl relative grid place-items-center'>
                <div className='h-[350px] w-[85%]'>
                  {/* <img src={Anup} className='h-full w-full rounded-2xl' alt="" /> */}
                </div>
                <div className='absolute -bottom-4 h-8 w-52 bg-lime-500 flex justify-center items-center rounded-2xl'>6+ Year Experience</div>
              </div>
            </div>
            <div className='p-4'>
              <div>
                <div>
                  <h1 className='text-xl font-bold text-neutral-800'>About Me</h1>
                </div>
                <div className='gap-8 grid text-neutral-800 mt-6'>
                  <p>
                    Hello! I'm Anup, a passionate full-stack developer specializing in React.js and modern web technologies.
                    With over 6 years of experience,I've helped businesses of all sizes build exceptional
                    digital experiences that drive growth.
                  </p>
                  <p>
                    My approach combines technical expertise with creative problem-solving
                    to deliver solutions that are not only functional but also visually stunning
                    and user-friendly. I believe in writing clean, maintainable code and
                    staying up-to-date with the latest industry trends.
                  </p>
                </div>
              </div>
              <div className='grid gap-8 mt-16'>
                <div className='gap-3'>
                  <div className='h-14 w-full border border-cyan-300 hover:border-cyan-800 rounded-xl items-center flex gap-6  hover:bg-teal-100 hover:shadow-md transition duration-200 '>
                    <div className='rounded-full border-1 h-9 w-9 ml-4'>

                    </div>
                    <div>
                      <strong className='text-neutral-900'> Clean Code</strong>
                      <p className='text-xs text-neutral-900'>Maintainable & Scalable</p>
                    </div>
                  </div>
                </div>
                <div className='h-14 w-full border border-cyan-300 hover:border-cyan-800 rounded-xl items-center flex gap-6  hover:bg-teal-100 hover:shadow-md transition duration-300'>
                  <div className='rounded-full border-1 h-9 w-9 ml-4'>

                  </div>
                  <div>
                    <strong className='text-neutral-900'> Creativ Design</strong>
                    <p className='text-xs text-neutral-900'>Stunning interface</p>
                  </div>
                </div>
                <div className='h-14 w-full border border-cyan-300 hover:border-cyan-800 rounded-xl items-center flex gap-6  hover:bg-teal-100 hover:shadow-md transition duration-300'>
                  <div className='rounded-full border-1 h-9 w-9 ml-4'>

                  </div>
                  <div>
                    <strong className='text-neutral-900'>Performance</strong>
                    <p className='text-xs text-neutral-900'>Lighting fsct apps</p>
                  </div>
                </div>
                <div className='h-14 w-full border border-cyan-300 hover:border-cyan-800 rounded-xl items-center flex gap-6  hover:bg-teal-100 hover:shadow-md transition duration-300'>
                  <div className='rounded-full border-1 h-9 w-9 ml-4'>

                  </div>
                  <div>
                    <strong className='text-neutral-900'>Privacy</strong>
                    <p className='text-xs text-neutral-900'>Maintainable & Scalable</p>
                  </div>
                </div>
                <div className='h-14 w-full border border-cyan-300 hover:border-cyan-800 rounded-xl items-center flex gap-6  hover:bg-teal-100 hover:shadow-md transition duration-300'>
                  <div className='rounded-full border-1 h-9 w-9 ml-4'>

                  </div>
                  <div>
                    <strong className='text-neutral-900'>Security</strong>
                    <p className='text-xs text-neutral-900'>Best Practices</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='grid place-items-center gap-5 mt-12 md:flex text-white'>
                  <div className='h-10 w-96 border-2 rounded-xl flex justify-center items-center font-semibold bg-pink-500 hover:bg-rose-500 transition duration-300 hover:shadow-lg hover:border-teal-400'> Download Resume</div>
                  <div className='h-10 w-96 border-1 hover:bg-cyan-300 text-neutral-800 bg-cyan-200 rounded-xl flex justify-center items-center font-semibold transition duration-300 hover:shadow-lg'>Vew Protfulio</div>
                </div>
              </div>
            </div>
            <div className='grid justify-center'>
              <div className='h-[400px] w-[400px] border-t-1 border-l-1 border-r-1 rounded-2xl relative grid place-items-center'>
                <div className='h-[350px] w-[85%]'>
                  <img src={Anup} className='h-full w-full rounded-2xl' alt="" />
                </div>
                <div className='absolute -bottom-4 h-8 w-52 bg-lime-500 flex justify-center items-center rounded-2xl'>6+ Year Experience</div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default AboutMe
