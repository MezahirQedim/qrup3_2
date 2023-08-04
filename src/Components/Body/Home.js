import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import Test from './Test';



const Home = () => {

  const {test} = React.useContext(ThemeContext)



  return (
    <div>
      {test}


      {/* <Test> MEzahir Test  <div style={{backgroundColor: "red"}}>kjjjkkjlkjbl</div></Test> */}
    </div>
  )
}

export default Home