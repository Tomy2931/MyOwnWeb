import './Home.css'
import red_button from './imgs/red_button.png'
import yellow_button from './imgs/yellow_button.png'
import joystick from './imgs/joystick.png'
import InsertCoinMain from './Screens/ScreenInsertCoin/index'
import HandsCoin from './HandsCoin'
import LanguageScreen from './Screens/Language'
import EnglishMenuTitle from './Screens/MainTitle/English'
import AboutMySpanish from './Screens/MainTitle/Spanish/aboutMySpanish/index'
import MyExperience from './Screens/MainTitle/Spanish/myExpSpanish/index'

// IMPORTS CON MAYUSCULA AL PRINCIPIO 


function Home() {
  return (
    <main className='flex justify-center'>

      <div className='arcade_principal'>

        <div className='caja_1 rounded-t-md'>
          <img className='joystick' src={joystick} alt="" />
        </div>

        <div className='caja_2 rounded-b-md'>
          {/* <HandsCoin/> */}
          <div className='insert_coin_box'></div>

        </div>
        
        <img className='boton_1' src={red_button} alt="" />
        <img className='boton_2 ' src={yellow_button} alt="" />

        {/* Screen: */}
        
        <div className='caja_3 '>

          {/* Pantalla de "Insert Coin" */}
          {/* <InsertCoinMain/> */} 

          {/* Seleccionar lenguaje */}
          {/* <LanguageScreen/> */}

          {/* SPANISH */}
          {/* Menu principal */}
          {/* <SpanishMenuTitle/> */}

          {/* About My */}
          {/* <AboutMySpanish/> */}
          
          {/* My experience */}
          <MyExperience />

          {/* <EnglishMenuTitle/> */}


        </div>


        
        

        

      </div>
      





    </main>
       
  )
}



export default Home;