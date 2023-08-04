import { createContext} from "react";
import React from "react";


export const ThemeContext = createContext()



const Provider = ({children}) => {


    const [test, setTest] = React.useState("")



    return(
        <ThemeContext.Provider value={{test, setTest}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default Provider





