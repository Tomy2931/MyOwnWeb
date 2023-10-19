import './styles.css'
import PhoneBox from './phone'
import BookPhone from './bookPhone'
import phoneBook from '../../../../imgs/phoneBook.png'
import phoneGuy from '../../../../imgs/phoneGuy.jfif'
import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'

const phoneNumbersInfo = [
  {info:"+54 221 6267595"},
  {info:"@tomy_cejas"},
  {info:"https://www.linkedin.com/in/tomas-cejas-033439251/"},
  {info:"https://github.com/Tomy2931"},
  {info:"tomas.cejas@hotmail.com"},
  {info:"Deje de llamar a este numero, la pizzería cerró hace 2 años"},
]

function contact() {
  const context = useContext(ArcadeContext)
    return (
        <main className={`w-[100%] h-[100%]  ${(context.languageSelected == '6' ?  'onScreenStyle' : 'offScreenStyle')}`}>
          <div className='contactMain'>
            <img className='w-12 absolute top-5 left-5 phoneBook cursor-pointer' onClick={context.openBook} src={phoneBook} alt="" />

            {/* Libreta con numeros */}
            <BookPhone/>  

            {/* Telefono para marcar */}
            <PhoneBox/>

            <div className={`w-[100%] h-[100%] absolute ${(context.bubbleTextPhone == true ?  'onScreenStyle' : 'offScreenStyle')}`}>

              <div className='w-[100%] h-[100%] absolute flex justify-center items-end '>
                  <div className='bubbleTextPhone w-[80%] h-[33%] mb-5 rounded-lg relative'>
                      <h1 className='Xclose text-white ml-2 absolute text-2xl top-1 right-4' onClick={context.closeBubbleTextPhone}>X</h1>
                      <img className='phoneGuyIcon' src={phoneGuy} alt="imagenPerfil" />

                        <h1 className='text-white ml-2 absolute text-2xl top-4 left-[28%]'>???:</h1>
                            
                              <h2 className='phoneGuyText text-white ml-1 text-xs'> no rompas las bolas flaco</h2>
                          
                        </div>
                      <div>

                      </div>
                      
                </div>
            </div>


            </div>
         
        </main>
         
    )
  }

export default contact
