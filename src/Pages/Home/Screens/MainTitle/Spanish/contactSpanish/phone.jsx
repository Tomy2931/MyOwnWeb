import './styles.css'
import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'



function phoneBox() {
  const context = useContext(ArcadeContext)

  
    return (
           <div className='phoneBox'>
                <div className='phoneHandle'></div>
                <div className='numberScreen'>
                    <p className='numberScreenCont'>{context.numberPressed}</p>
                </div>
                <div className='phoneButtonBox'>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("1")}} >1</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("2")}} >2</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("3")}} >3</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("4")}} >4</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("5")}} >5</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("6")}} >6</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("7")}} >7</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("8")}} >8</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("9")}} >9</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("*")}} >*</div>
                  <div className='buttonNumber' onClick={() =>{context.buttonPress("0")}} >0</div>
                  <div className='buttonNumber' onClick={() =>{context.setNumberPressed("")}} >#</div>
                 
                </div>
           </div>
         
    )
  }

export default phoneBox