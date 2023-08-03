import Main from "./Components/Main";
import { createContext } from "react";
import React from "react";

export const ThemeContext = createContext()


function App() {

    const [test, setTest] = React.useState("Mezahirrr")


    const data = {
      test, setTest
    }


  return (
    <div>
      <ThemeContext.Provider  value={data}>
        <Main />
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
