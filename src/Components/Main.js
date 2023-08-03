import React from 'react';
import Navbar from './Header/Navbar';
import { Routes, Route} from 'react-router-dom'
import Home from './Body/Home';
import Service from './Body/Service';
import Users from './Body/Users';
import Form from './Body/Form';

const Main = () => {





  return (
    <div>
        {/* Header */}
        <Navbar/>

        {/* Body */}

        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/users' element={<Users/>}/>
            <Route path='/form' element={<Form/>}/>
        </Routes>

        

        
    </div>
  )
}

export default Main