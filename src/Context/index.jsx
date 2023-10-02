import { createContext, useState, useEffect } from 'react'


export const ArcadeContext = createContext()

export const ArcadeProvider = ({children}) => {
    //Presionar boton
    const [pressButton, setPressButton] = useState(false)




    return (
        <ArcadeContext.Provider value={{
        pressButton, 
        setPressButton
    
        }}>
          {children}
        </ArcadeContext.Provider>
    );
};
