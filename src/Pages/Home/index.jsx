import './Home.css'
import red_button from './imgs/red_button.png'
import yellow_button from './imgs/yellow_button.png'
import joystick from './imgs/joystick.png'
import InsertCoinMain from './Screens/ScreenInsertCoin/index'
import SpanishMenuTitle from './Screens/MainTitle/Spanish/index'
import LanguageScreen from './Screens/Language'
import EnglishMenuTitle from './Screens/MainTitle/English'
import AboutMySpanish from './Screens/MainTitle/Spanish/aboutMySpanish/index'
import MyExperience from './Screens/MainTitle/Spanish/myExpSpanish/index'
import MySkills from './Screens/MainTitle/Spanish/mySkillsSpanish/index'
import Contact from './Screens/MainTitle/Spanish/contactSpanish/index'

import React, { useContext } from 'react'
import { ArcadeContext } from '../../Context'


// IMPORTS CON MAYUSCULA AL PRINCIPIO 


function Home() {

  const context = useContext(ArcadeContext)
  


  return (
    <main className='flex justify-center'>

      <div className='arcade_principal'>

        <div className='caja_1 rounded-t-md'>
          <img className='joystick' src={joystick} alt="" />
        </div>

        <div className='caja_2 rounded-b-md '>
          <div className='insert_coin_box' 
          onClick={(event) =>{
            context.coinInsert(event);
            context.addCoin(event);
          }
         
          }
          
          ></div>

        </div>
        
        <img className='boton_1 ' src={red_button} alt="" />
        <img className='boton_2' onClick={()=> {
          if (context.languageSelected !== undefined){
            context.setLanguageSelected('1')
          }

        }} 
        src={yellow_button} alt="" />

        {/* Screen: */}
        
        <div className='caja_3 '>

          {/* Pantalla de "Insert Coin" */}
          <InsertCoinMain/>


          {/* Seleccionar lenguaje */}
          <LanguageScreen/>

          {/* SPANISH */}

          {/* Menu principal */}
          <SpanishMenuTitle/>

          {/* About My */}
          <AboutMySpanish />
          
          {/* My experience */}
          <MyExperience />

          {/* My skills */}
          <MySkills/>

          {/* Contact */}
          <Contact/>

          {/* ENGLISH */}

          <EnglishMenuTitle/>


        </div>


        
        

        

      </div>
      





    </main>
       
  )
}



export default Home;