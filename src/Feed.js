import React, { useState,useEffect } from 'react'
import {Avatar} from '@material-ui/core'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import './css/feed.css'
import Post from './Post'
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import { db } from "./firebase"; 

const Feed = () => {

  const [posts,setPost] = useState([]);
  const [input,setInput] = useState();

  const submitPost=(e)=>{
    e.preventDefault();
      db.collection("posts").add({
      name:"Rahul Mane",
      discription:"this is test",
      message:"we are learning",
      photourl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuY2Si3nXBYTAsDFkpWJw4TewBh1pzcNYXw&usqp=CAU",
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput(" ");
  }

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setPost(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
      })))
    })
    
    
  }, [])

  console.log(posts);
  


  return (
    <>
<div className='feed'>
  <div className='feed__input'>
    <div className='feed__form'>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuY2Si3nXBYTAsDFkpWJw4TewBh1pzcNYXw&usqp=CAU"/>
      
      <form onSubmit={submitPost}>
      <input type="text" placeholder='Start a post' value = { input } onChange={e=>setInput(e.target.value)}/>
      <input type="submit" />
      </form>
    </div>
      
    

    <div className='feed__options'>
      <div className='option'>
      <PhotoSizeSelectActualIcon style = {{color:'#70b5f9'}}/>
      <span>Photo</span>
      </div>

      <div className='option'>
      <YouTubeIcon style = {{color:'#7fc15e'}}/>
      <span>Video</span>
      </div>

      <div className='option'>
      <EventAvailableIcon style = {{color:'#e7a33e'}}/>
      <span>Event</span>
      </div>

      <div className='option'>
      <ArticleIcon style = {{color:'#fc9295'}}/>
      <span>Article</span>
      </div>

    </div>
  </div> 

  <div>

    {
      posts.map(({id,data:{name,discription,message,photourl}})=>{
          return <Post name = {name} discription = {discription} message = {message}
          photourl = {photourl}/>
      })
    }
    
    
 
  </div>  
</div>
  
    </>
  )
}

export default Feed