import React from 'react';
import './App.css'
import Header from './header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Tp from './tp'


function App() {
  return (
    <>
    <div className='app-wrapper'>
     <Header/>
    </div>
    <div className='app_body'>
      <Sidebar/>
      <Feed/>
      <Tp/>
    </div>


    
    </>
   
  )
}

export default App;
