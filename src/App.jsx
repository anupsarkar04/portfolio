import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Compoents/Home';
import FirstPage from './Compoents/FirstPage';
import AboutMe from './Compoents/AboutMe'
import AllProject from './Compoents/Project/AllProject';
import MyGig from './Compoents/MyGig/MyGig';
import Resume from './Compoents/Resume';
import BlogPost from './Compoents/BlogPost';
import BlogDetailPage from './Compoents/BlogDetailPage';
import SignUp from './Pages/SignUp';



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FirstPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/home/SignUp' element={<SignUp/>}/>
      <Route path='home/aboutme' element={<AboutMe/>}/>
      <Route path='/home/allproject' element={<AllProject/>}/>
      <Route path='/home/mygig' element={<MyGig/>}/>
      <Route path='/home/resume' element={<Resume/>}/>
      <Route path='/home/blogpost' element={<BlogPost/>}/>
       <Route path="/blog/:blogId" element={<BlogDetailPage />} />
      <Route path='/home/aboutme' element={<AboutMe/>}/>

    </Routes>
    
    </BrowserRouter>
       
    </>
  )
}

export default App
