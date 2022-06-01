import React from 'react'
import {Avatar} from '@material-ui/core'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './css/post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({name,photourl,discription,message}) => {
  return (
    <div className='posts'>
        <div className='post__header'>
            <div className='post__hraderLeft'>
                <Avatar src ={photourl}/>
                
                <div className='post_profile_details'>
                    <h3>{name}</h3>
                    <p>{discription}</p>
                </div>
            </div>
            <MoreVertIcon/>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>

        <div className='post__footer'>
            <div className='post__footer__option'>
            <ThumbUpOffAltIcon/>
            <span>Like</span>
            </div>

            <div className='post__footer__option'>
            <ChatIcon/>
            <span>Comment</span>
            </div>

            <div className='post__footer__option'>
            <ShareIcon/>
            <span>Share</span>
            </div>

            <div className='post__footer__option'>
            <SendIcon/>
            <span>Send</span>
            </div>
        </div>
    </div>
  )
}

export default Post
