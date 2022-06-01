import React from 'react'
import { Avatar } from '@material-ui/core'
import './css/header.css'

const Headeroptions = ({Icon,title,avatar}) => {
  return (
    <>
    <div className='header___options'>
      {
        Icon && <Icon></Icon>
      }
      {
        avatar && <Avatar name = {avatar}/>
      } 
      <span>{title}</span>
    </div>
    </>
  )
}

export default Headeroptions