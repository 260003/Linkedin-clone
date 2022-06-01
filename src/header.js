import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './css/header.css'
import Headeroptions from './Headeroptions.js'
import  HomeIcon  from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from '@material-ui/core'



const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__logo'>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkdein_logo" />
            </div>
            <div className='header__search'>
                <SearchIcon/>
                <input type="text" placeholder='Search'/>  
            </div>
        </div>
        <div className='header__right'>
            <Headeroptions Icon = {HomeIcon} title='Home' />
            <Headeroptions Icon = {PeopleIcon} title='My network' />
            <Headeroptions Icon = {BusinessCenterIcon} title='Job' />
            <Headeroptions Icon = {MessageIcon} title='Meassaging' />
            <Headeroptions Icon = {NotificationsIcon} title='Notification' />
            <Headeroptions avatar = {Avatar} title='Rahul Mane' />
        </div>
    </div>
  )
}

export default Header