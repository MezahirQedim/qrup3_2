import React from 'react';
import { ThemeContext } from '../../App';

const Home = () => {

  const {test} = React.useContext(ThemeContext)



  return (
    <div>
      {test}
    </div>
  )
}

export default Home