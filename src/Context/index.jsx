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

    //Pantalla About My

    const [questionNumber, setQuestionNumber] = useState(0)
    const answersList = ["Mi nombre es Tomas Cejas, pero me gusta que me digan Tomy"]


    //Pantalla Inventario
    const [coinCount,setCoinCount] = useState(0)
    const addCoin = () => {
      setCoinCount(coinCount+1)
    }

    const [selectedItemDetail,setSelectedItemDetail] = useState(0)
    
    const [isItemDetailOpen,setIsItemDetailOpen] = useState(false)
    const clickItem = () => setIsItemDetailOpen(true)

    const clickClose = () => {setIsItemDetailOpen(false)}

    
  

    //Pantalla Contacto
    const [isBookOpen,setIsBookOpen] = useState(false)
    const openBook = ()=> setIsBookOpen(true)
    const closeBook = ()=> setIsBookOpen(false)
    
    const [numberPressed,setNumberPressed] = useState("")
    const [bubbleTextPhone,setbubbleTextPhone] = useState(false)
    
    function buttonPress (num) {
      
      if (numberPressed.length < 4) {
          setNumberPressed(prevNumberPressed => prevNumberPressed + num)
      }
    }
   
      if (numberPressed.length == 4) {
        setTimeout(() => {
          setbubbleTextPhone(true)
        }, 1400);
      }
    
      const closeBubbleTextPhone = () => {
        setbubbleTextPhone(false)
        setNumberPressed("")
      }

   

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
        questionNumber, 
        setQuestionNumber,
        selectedItemDetail,
        setSelectedItemDetail,
        isItemDetailOpen,
        setIsItemDetailOpen,
        clickItem,
        clickClose,
        numberPressed,
        setNumberPressed,
        buttonPress,
        bubbleTextPhone,
        setbubbleTextPhone,
        closeBubbleTextPhone,

    
        }}>
          {children}
        </ArcadeContext.Provider>
    );
};
