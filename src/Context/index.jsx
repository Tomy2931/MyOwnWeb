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

    //Pantalla Inventario
    const [coinCount,setCoinCount] = useState(0)
    const addCoin = () => {
      setCoinCount(coinCount+1)
    }

    //Pantalla Contacto
    const [isBookOpen,setIsBookOpen] = useState(false)
    const openBook = ()=> setIsBookOpen(true)
    const closeBook = ()=> setIsBookOpen(false)

    return (
        <ArcadeContext.Provider value={{
        coinScreen,
        setCoinScreen,
        coinInsert,
        languageSelected,
        setLanguageSelected,
        isBookOpen,
        setIsBookOpen,
        openBook,
        closeBook,
        coinCount,
        setCoinCount,
        addCoin,
        

    
        }}>
          {children}
        </ArcadeContext.Provider>
    );
};
