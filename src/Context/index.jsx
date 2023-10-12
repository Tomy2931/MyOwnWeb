import React from 'react';
import { createContext, useState, useEffect } from 'react'


export const ArcadeContext = createContext()

export const ArcadeProvider = ({children}) => {
    //Pantalla Insert Coin
  
    const [coinScreen, setCoinScreen] = useState(true)
    const coinInsert = ()=> {
      setInterval(() => {
        setCoinScreen(false)
        
      }, 1000);
    }
    
    //Lenguaje seleccionado 
    const [languageSelected,setLanguageSelected] = useState()

    //Pantalla Contacto
    const [isBookOpen,setIsBookOpen] = useState(false)
    const openBook = ()=> setIsBookOpen(true)
    const closeBook = ()=> setIsBookOpen(false)
    




       
    //Presionar boton
    const [pressButton, setPressButton] = useState(false)

    const [onScreen, setOnScreen] = React.useState(false);

    const orangeButton = () => {console.log("Boton naranja");}
    const redButton = () => {console.log("Boton rojo");}
    return (
        <ArcadeContext.Provider value={{
        coinScreen,
        setCoinScreen,
        coinInsert,
        pressButton, 
        setPressButton,
        onScreen,
        orangeButton,
        redButton,
        languageSelected,
        setLanguageSelected,
        isBookOpen,
        setIsBookOpen,
        openBook,
        closeBook,
        

    
        }}>
          {children}
        </ArcadeContext.Provider>
    );
};
