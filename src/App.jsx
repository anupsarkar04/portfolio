import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from './Compoents/FirstPage';
import AboutMe from './Compoents/AboutMe'
import AllProject from './Compoents/Project/AllProject';
import MyGig from './Compoents/MyGig/MyGig';
import Resume from './Compoents/Resume';
import BlogPost from './Compoents/BlogPost';
import BlogDetailPage from './Compoents/BlogDetailPage';
import SignUp from './Pages/SignUp';
import Home from './Compoents/Home';



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/allproject' element={<AllProject/>}/>
      <Route path='/mygig' element={<MyGig/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/blogpost' element={<BlogPost/>}/>
       <Route path="/blog/:blogId" element={<BlogDetailPage />} />
      <Route path='/aboutme' element={<AboutMe/>}/>

    </Routes>
    
    </BrowserRouter>
       
    </>
  )
}

export default App
