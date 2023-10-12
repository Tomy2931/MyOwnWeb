import './styles.css'
import PhoneBox from './phone'
import BookPhone from './bookPhone'
import phoneBook from '../../../../imgs/phoneBook.png'
import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'


function contact() {
  const context = useContext(ArcadeContext)
    return (
        <main className={`w-[100%] h-[100%]  ${(context.languageSelected == '6' ?  'onScreenStyle' : 'offScreenStyle')}`}>
          <div className='contactMain'>
          <img className='w-12 absolute top-5 left-5 phoneBook' onClick={context.openBook} src={phoneBook} alt="" />

          {/* Libreta con numeros */}
          <BookPhone/>  

          {/* Telefono para marcar */}
          <PhoneBox/>

          </div>
        </main>
         
    )
  }

export default contact
