import React, { useState } from 'react'
import { Link } from 'react-router';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
  let toggol = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
        <section>
          <div>
            <div className='h-20 w-full bg-indigo-950 text-white relative '>
              <div className='flex items-center lg:justify-between  h-full w-full absolute'>
                <div>Logo</div>
                <button onClick={toggol} className='h-full lg:hidden justify-end flex w-full p-7'>|||</button>
                <div>
                  <nav className='lg:flex lg:justify-center lg:items-center list-none gap-9 hidden '>
                    <ul  className='list-none hover:underline underline-offset-8 '>About</ul>
                        <li className='list-none hover:underline underline-offset-8 transform ease-in-out duration-300'>Skills</li>
                        <li className='list-none hover:underline underline-offset-8 '>Services</li>
                        <Link to={'/home/allproject'}><li className='list-none hover:underline underline-offset-8 '>Project</li> </Link>
                        <li className='list-none hover:underline underline-offset-8 '>Marketplace</li>
                       <Link to={'/home/blogpost'}><li className='list-none hover:underline underline-offset-8 '>Blog</li></Link>
                        <li className='list-none hover:underline underline-offset-8 '>Contact</li>
                    <button>Hire Me</button>
                  </nav>
                </div>
                {isOpen && (
                <div className='h-64 top-20 w-full absolute lg:hidden'>
                  <div className=' h-full border-2 border-cyan-300 text-black bg-cyan-300 hover:shadow-xl shadow-cyan-400 pt-2 w-full rounded-b-md duration-300 transform hover:scale-101'>
                    <div className='flex justify-between pr-3 pl-3'>
                      <div className='flex gap-3'>
                        <div className='h-16 w-16 rounded-full bg-amber-100'></div>
                        <div>
                          <strong>Anup Sarkar</strong>
                          <h1>anupking84@gmail.com</h1>
                        </div>
                      </div>
                      <div className='h-16 w-16 rounded-full bg-red-600 flex justify-center items-center'>Logo</div>
                    </div>
                    <div>
                      <div className='grid grid-cols-3 md:grid-cols-4 grid-rows-4 place-items-center h-full gap-7 pt-6'>
                       <Link to={'/home/aboutme'}><li className='list-none hover:underline underline-offset-8 '>About</li></Link>
                       {/* <a className='list-none hover:underline underline-offset-8 '>About</a> */}
                        <li href='#skils' className='list-none hover:underline underline-offset-8 transform ease-in-out duration-300'>Skills</li>
                        <li href='#services' className='list-none hover:underline underline-offset-8 '>Services</li>
                       <Link to={'/home/allproject'}><li className='list-none hover:underline underline-offset-8 '>Project</li></Link>
                        <li href='#marketplace' className='list-none hover:underline underline-offset-8 '>Marketplace</li>
                       <Link to={'/home/mygig'}><li className='list-none hover:underline underline-offset-8 '>My GiG</li></Link>
                       <Link to={'/home/blogpost'}><li className='list-none hover:underline underline-offset-8 '>Blog</li></Link>
                        <li href='#contact' className='list-none hover:underline underline-offset-8 '>Contact</li>
                      </div>
                    </div>
                  </div>
                </div>


                )} 
              </div>
            </div>


          </div>
        </section>
    </>
  )
}

export default Navigation