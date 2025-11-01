import React from 'react'
import Project from './Project/HomeProject'


const Resume = () => {
  return (
    <>
<div>
  
</div>


      <div className="min-h-screen bg-[#e0f7fa] text-gray-100 font-sans">
        <div className="bg-gray-900 text-gray-100 font-sans py-12 px-4 sm:px-6 lg:px-8">
          {/* Container for centering content and max-width */}
          <div className="max-w-6xl mx-auto space-y-12">

            <div className='md:flex md:items-center grid place-items-center gap-10 md:gap-5'>
              <section id="contact-info" className="bg-gray-800 p-3 rounded-lg w-96 h-[400px] grid shadow-lg">
                <h3 className="text-3xl font-bold text-blue-400 text-center mb-6">Contact Information</h3>
                <div className="max-w-2xl mx-auto">
                  <div className=" grid gap-5 text-lg text-gray-300">
                    <p><strong className="text-white">Full Name:</strong> Anup Kumar</p>
                    <p><strong className="text-white">Email:</strong> <a href="mailto:hello@suborno.dev" className="text-blue-400 text-sm hover:underline">anupking84@gmail.com</a></p>
                    <p><strong className="text-white">Phone:</strong> <a href="01312089325" className="text-blue-400 hover:underline">+8801312089325</a></p>
                    <p><strong className="text-white">Location:</strong> Rajshahi, Bangladesh</p>
                    <p><strong className="text-white">Website:</strong> <a href="https://www.anupcst.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.anupcst04.dev</a></p>
                  </div>
                </div>
              </section>
              <section className="bg-gray-800 h-[350px] flex items-center rounded-lg shadow-lg">
                <div>
                  <h3 className="text-3xl font-bold text-blue-400 text-center">Professional Summary</h3>
                  <p className="text-sm p-8 text-gray-300 leading-relaxed text-justify">
                    I'm Md. Abul Maruf Suborno, commonly known as Suborno in the development community. I'm a full-stack developer with over 3 years of experience specializing in building modern web applications using Next.js, React, and Node.js. Passionate about creating clean, efficient, and user-friendly solutions that solve real-world problems. Experienced in leading development teams and collaborating with cross-functional stakeholders to deliver high-quality products.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto py-16 px-4 mb-12">
          <h3 className="text-3xl font-bold text-blue-400 text-center mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-white mb-4">Frontend</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            {/* Backend */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-white mb-4">Backend</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>GraphQL</li>
                <li>REST APIs</li>
                <li>Authentication</li>
              </ul>
            </div>
            {/* Database */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-white mb-4">Database</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Redis</li>
                <li>Firebase</li>
              </ul>
            </div>
            {/* DevOps */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-white mb-4">DevOps</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="container mx-auto py-16 px-4 bg-gray-800 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-blue-400 text-center mb-8">Work Experience</h3>

          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-white">Senior Full-Stack Developer</h4>
            <p className="text-blue-300">Technochord Solutions | 2022 - Present | San Francisco, CA</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Lead development of enterprise web applications using Next.js, TypeScript, and Node.js</li>
              <li>Mentor junior developers and implement CI/CD pipelines</li>
              <li>Collaborate with product managers and designers to define product requirements</li>
              <li>Optimize application performance and implement best practices for security and scalability</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-white">Full-Stack Developer</h4>
            <p className="text-blue-300">Digital Crafters | 2020 - 2022 | Remote</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Developed and maintained multiple client websites and web applications</li>
              <li>Built an e-commerce platform that increased client sales by 35%</li>
              <li>Implemented responsive designs that improved mobile user engagement</li>
              <li>Integrated payment gateways and third-party APIs for seamless user experience</li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-white">Frontend Developer</h4>
            <p className="text-blue-300">Webflow Agency | 2018 - 2020 | Portland, OR</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Created responsive and interactive user interfaces for client websites</li>
              <li>Developed 20+ client websites with modern UI/UX principles</li>
              <li>Implemented accessibility standards that improved site usability</li>
              <li>Collaborated with designers to translate mockups into functional interfaces</li>
            </ul>
          </div>
        </section>

        <Project/>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-16 px-4 bg-gray-800 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-blue-400 text-center mb-8">Get In Touch</h3>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
            {/* <div className="mt-8 text-center text-gray-300">
            <p className="mb-2">Email: <a href="mailto:hello@suborno.dev" className="text-blue-400 hover:underline">hello@suborno.dev</a></p>
            <p>Phone: <a href="tel:+8801885685632" className="text-blue-400 hover:underline">+8801885685632</a></p>
            <p className="mt-2">Location: Rajpara, Rajshahi, Bangladesh</p>
            <p className="mt-2">Website: <a href="https://www.suborno.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.suborno.dev</a></p>
          </div> */}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 p-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Md. Abul Maruf Suborno. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            {/* Add social media links here if needed */}
            <a href="#" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">GitHub</a>
          </div>
        </footer>
      </div>

    </>
  )
}

export default Resume