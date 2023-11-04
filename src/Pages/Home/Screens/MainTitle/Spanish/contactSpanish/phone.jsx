import './styles.css'
import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'

import phoneButton1 from '../../../../Mp3/phoneButton1.mp3'
import phoneButton2 from '../../../../Mp3/phoneButton2.mp3'
import phoneButton3 from '../../../../Mp3/phoneButton3.mp3'

function playSound (elementSound) {
  let sound = new Audio(elementSound)
  sound.play()
}

function phoneBox() {
  const context = useContext(ArcadeContext)

  
    return (
           <div className='phoneBox'>
                <div className='phoneHandle'></div>
                <div className='numberScreen'>
                    <p className='numberScreenCont'>{context.numberPressed}</p>
                </div>
                <div className='phoneButtonBox'>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("1");playSound(phoneButton1)}} >1</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("2");playSound(phoneButton2)}} >2</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("3");playSound(phoneButton3)}} >3</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("4");playSound(phoneButton1)}} >4</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("5");playSound(phoneButton2)}} >5</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("6");playSound(phoneButton3)}} >6</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("7");playSound(phoneButton1)}} >7</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("8");playSound(phoneButton2)}} >8</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("9");playSound(phoneButton3)}} >9</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("*");playSound(phoneButton1)}} >*</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("0");playSound(phoneButton2)}} >0</div>
                  <div className='buttonNumber' onClick={() =>{context.setNumberPressed("");playSound(phoneButton3)}} >#</div>
                 
                </div>
           </div>
         
    )
  }

export default phoneBox