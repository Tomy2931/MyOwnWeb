import './Home.css'
import red_button from './imgs/red_button.png'
import yellow_button from './imgs/yellow_button.png'
import joystick from './imgs/joystick.png'
import InsertCoinMain from './Screens/ScreenInsertCoin/index'
import HandsCoin from './HandsCoin'

function Home() {
  return (
    <main className='flex justify-center'>

      <div className='arcade_principal'>

        <div className='caja_1 rounded-t-md'>
          <img className='joystick' src={joystick} alt="" />
        </div>

        <div className='caja_2 rounded-b-md'>
          <HandsCoin/>
          <div className='insert_coin_box'></div>

        </div>
        
        <img className='boton_1' src={red_button} alt="" />
        <img className='boton_2 ' src={yellow_button} alt="" />

        <div className='caja_3 '>
          {/* <InsertCoinMain/> */}
        </div>


        
        

        

      </div>
      





    </main>
       
  )
}



export default Home;