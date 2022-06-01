import React from 'react'
import './css/sidebar.css'
import {Avatar} from '@material-ui/core'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwL0_LECqWP5nmWfmq8FogSm1xznIYak4M6A&usqp=CAU" alt="" />
                <div className='profile__details'>
                    <Avatar/>
                    <h4>Rahul Mane</h4>
                    <p>Web Devloper</p>
                </div>

                <div className='profile_stats'>
                  <span>Who viewed your profile</span>
                  <span className='stat_number'>20</span>
                </div>

                <div className='profile_stats'>
                  <span>Connectins <br /><b>Grow Your Network</b></span>
                  <span className='stat_number'>150</span>
                </div>
        </div>

        <div className='sidebar_recent'>
          <p>Recent</p>
          <p className='hash'><span>#</span>branding</p>
          <p className='hash'><span>#</span>Marketing</p>
          <p className='hash'><span>#</span>Web Devlopment</p>
          <p className='hash'><span>#</span>Programming</p>
          <p className='hash'><span>#</span>ReactJS</p>
          <p className='hash'><span>#</span>Redux</p>
        </div>
    </div>
  )
}

export default Sidebar