import './styles.css'
import arrowScreen from '../../imgs/arrowScreen.png'

import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../Context'


function InsertCoinMain() {
    const context = useContext(ArcadeContext)
    return (
        <main className={` ${(!context.coinScreen ? 'offScreenStyle' : '')}`}>
            <div className='InsertCoinMain'>
            <h2 className= 'select-none' >Insert Coin</h2>
            <img className='rotate-[-90deg] w-20 mt-1 select-none' src= {arrowScreen} alt="" />
        </div>
        </main>
        
         
    )
  }

export default InsertCoinMain
