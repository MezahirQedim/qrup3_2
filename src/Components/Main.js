import React from 'react';
import Navbar from './Header/Navbar';
import { Routes, Route} from 'react-router-dom'
import Home from './Body/Home';
import Service from './Body/Service';
import Users from './Body/Users';
import Form from './Body/Form';

const Main = () => {




  const naviqasiya = [
    {
      path: "/home",
      element: <Home/>,
      name: "Home"
    },
    {
      path: "/service",
      element: <Service/>,
      name: "Service"
    },
    {
      path: "/users",
      element: <Users/>,
      name: "Users"
    },
    {
      path: "/form",
      element: <Form/>,
      name: "Form"
    },
  ]





  return (
    <div>
        {/* Header */}
        <Navbar naviqasiya={naviqasiya}/>

        {/* Body */}

        <Routes>
            {naviqasiya.map((item) => 
              <Route path={item.path} element={item.element} />
            )}

            {/* 
            <Route path='/home' element={<Home/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/users' element={<Users/>}/>
            <Route path='/form' element={<Form/>}/> 
            */}
        </Routes>

        

        
    </div>
  )
}

export default Main