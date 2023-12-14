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
    const [screenView,setScreenView] = useState()

    //Pantalla About Me

    const [questionNumber, setQuestionNumber] = useState(0)
    const [nameShow, setNameShow] = useState(false)

    const clickQuestion = (num) => {setQuestionNumber(num)}
      
    const nameReveal = () => {
      setNameShow(true)
    }
    


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
    
    const [numberPressed,setNumberPressed] = useState("") //Botones en pantalla
    const [bubbleTextPhone,setbubbleTextPhone] = useState(false) //Aparicion de globo de texto
    const [numberInfo,setNumberInfo] = useState(0) 
    
    function buttonPress (num) {
      
      if (numberPressed.length < 4) {
          setNumberPressed(prevNumberPressed => prevNumberPressed + num)
      }
    }
   
    useEffect(() => {
      if (numberPressed.length === 4) {
        setTimeout(() => {
          setbubbleTextPhone(true)
        }, 1400);
        switch (numberPressed) {
          case "2284": //wsp
            setNumberInfo(0);
            break;
          case "3842": //ig
            setNumberInfo(1);
            break;
          case "6784": //linkedin
            setNumberInfo(2);
            break;
          case "7731"://github
            setNumberInfo(3);
            break;
          case "1852"://correo
            setNumberInfo(4);
            break;
          case "2089"://pizza
            setNumberInfo(5);
            break;
          case "4672"://letter
            setNumberInfo(6);
            break;
          case "6666":
            setNumberInfo(8);
            break;
          default:
            setNumberInfo(7);
        }
      }
      
    }, [numberPressed]);
    
      const closeBubbleTextPhone = () => {
        setbubbleTextPhone(false)
        setNumberPressed("")
      }

      const answerText = () => {
        if (numberPressed.length == 4){
          
        }
      }

    return (
        <ArcadeContext.Provider value={{
        coinScreen,
        setCoinScreen,
        coinInsert,
        languageSelected,
        setLanguageSelected,
        screenView,
        setScreenView,
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
        numberInfo,
        setNumberInfo,
        clickQuestion,
        nameShow,
        setNameShow,
        nameReveal,
    
        }}>
          {children}
        </ArcadeContext.Provider>
    );
};
