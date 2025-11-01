import React, { useEffect, useState } from 'react'
import blogdata from './Json/Data.json'
import { useParams } from 'react-router-dom'

const BlogDetailPage = () => {
  // const {blogId}=useParams();
  // const navigate=useNavigate();
  // const [post,SetPost]=useState(null);
  // const [loding,setloding]=useState(true)

  // useEffect(()=>{
  //   setloding(true);
  //   const foundPost =blogdata.find(p=>p.id == blogId);
  //   SetPost(foundPost)
  //   setloding(false)
  // },[blogId])
// if(!post){
//   return(
//     <div>post not found</div>
//   )
// }

const {blogId}=useParams()
const [post,SetPost]=useState(null)
const [loding,Setloding]=useState(true)
useEffect(()=>{
  Setloding(true)
  const foundPost =blogdata.find(p=>p.id ==blogId);
  SetPost(foundPost)
  Setloding(false)
},[blogId])
  
if(!post){
  return
}
  return (
    <>
 <div>
  {post.longDescription}
  
 </div>



    </>
  )
}

export default BlogDetailPage