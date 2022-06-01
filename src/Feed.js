import React from 'react'
import {Avatar} from '@material-ui/core'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import './css/feed.css'
import Post from './Post'
const Feed = () => {
  return (
    <>
<div className='feed'>
  <div className='feed__input'>
    <div className='feed__form'>
      <Avatar/>
      <form action="">
      <input type="text" placeholder='Start a post' />
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
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </div>  
</div>
  
    </>
  )
}

export default Feed