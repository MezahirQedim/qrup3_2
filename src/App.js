import Main from "./Components/Main";
import ThemeContext from "./Components/Context/ThemeContext";

import React from "react";




function App() {

  


  return (
    <div>
      <ThemeContext>
        <Main />
      </ThemeContext>
      
    </div>
  );
}

export default App;
