import React from 'react'
import { Link } from 'react-router';
import blogdata from './Json/Data.json'


const BlogPost = () => {
  return (
    <>
{/* <div>
  {blogdata.map((post)=>(
    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-600">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.shortDescription}</p>
              <Link to={`/blog/${post.id}`} className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Read More</Link>
            </div>
          </div>
  ))}
</div> */}
   

    
    <section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-extrabold text-neutral-800 sm:text-5xl">
        Latest from the Blog
      </h2>
      <p class="mt-4 text-xl text-gray-500">
        Thoughts, insights, and tutorials on web development, design, and the latest tech trends.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogdata.map((post)=>(
      <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className='h-48 bg-gray-400 relative'>
          
          <span class="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Performance</span>
        </div>
        <div class="p-6">
          <div class="flex items-center gap-4 text-gray-400 text-sm mb-4">

            <span>{post.Date}</span>
           
            <span>{post.Time}</span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">{post.title}</h3>
          <p class="text-gray-400 text-base mb-4">{post.Description}</p>
          <Link to={`/${post.id}`}  class="text-blue-500 hover:text-blue-400 font-semibold flex items-center">
            Read more
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 8.5l-5 5-5-5"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.5l5-5 5 5"></path></svg>
          </Link>
        </div>
      </div>
      ))}

      {/* <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className='h-48 bg-gray-400 relative'>
          
          <span class="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">React</span>
        </div>
        <div class="p-6">
          <div class="flex items-center text-gray-400 text-sm mb-4">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h.01M7 12h.01M7 15h.01M11 12h.01M11 15h.01M15 12h.01M15 15h.01M17 10H7a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2z"></path></svg>
            <span>Feb 28, 2025</span>
            <svg class="w-4 h-4 ml-4 mr-2" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>8 min read</span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">
            The Future of Web Development with React Serv...
          </h3>
          <p class="text-gray-400 text-base mb-4">
            Explore how React Server Components are changing the way we build web applications.
          </p>
          <a href="#" class="text-blue-500 hover:text-blue-400 font-semibold flex items-center">
            Read more
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 8.5l-5 5-5-5"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.5l5-5 5 5"></path></svg>
          </a>
        </div>
      </div>

      <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className='h-48 bg-gray-400 relative'>
          
          <span class="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">UI/UX</span>
        </div>
        <div class="p-6">
          <div class="flex items-center text-gray-400 text-sm mb-4">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h.01M7 12h.01M7 15h.01M11 12h.01M11 15h.01M15 12h.01M15 15h.01M17 10H7a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2z"></path></svg>
            <span>Jan 12, 2025</span>
            <svg class="w-4 h-4 ml-4 mr-2" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>5 min read</span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">
            Creating Stunning UI Animations with Framer...
          </h3>
          <p class="text-gray-400 text-base mb-4">
            A deep dive into creating beautiful, performant animations using Framer Motion in React applications.
          </p>
          <a href="#" class="text-blue-500 hover:text-blue-400 font-semibold flex items-center">
            Read more
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 8.5l-5 5-5-5"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.5l5-5 5 5"></path></svg>
          </a>
        </div>
      </div> */}
      <div className='md:flex lg:hidden items-center  justify-center hidden'>
            {/* <Link to={'/home/allproject'}>
          <div className='h-10 w-72 rounded-xl mt-8 font-bold text-white border-1 flex justify-center items-center bg-gray-500 hover:bg-gray-700 text-xl'>
            See All Project
          </div>
          </Link> */}
        </div>
    </div>
    <div className='flex lg:flex md:hidden justify-center'>
              {/* <Link to={'/home/allproject'}>
              <div className='h-10 w-72 rounded-xl mt-8 font-bold text-white border-1 flex justify-center items-center bg-gray-500 hover:bg-gray-700 text-xl'>
                See All Project
              </div>
              </Link> */}
            </div>
        
  </div>
</section>
    </>
  )
}

export default BlogPost