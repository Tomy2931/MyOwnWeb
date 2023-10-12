import './styles.css'
import pointHand from '../../imgs/pointHand.png'

import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../Context'

function LanguageScreen() {
    const context = useContext(ArcadeContext)
    return (
        <main className={`LanguageScreen_Main ${!context.coinScreen ? 'onScreenStyle' : 'offScreenStyle'} ${context.languageSelected !== undefined ? 'offScreenStyle' : ''}`}>

            <div className='LanguageBox'>
                
                <h1 className='LanguageTitle' >Please, select a language: </h1>
                
                <div className='LanguageOption1'>

                    <img className='pointHand1' src={pointHand} alt="" />
                    <h2 onClick={()=> {context.setLanguageSelected('1');}}>Spanish</h2>

                </div>

                <div className='LanguageOption2'>

                    <img className='pointHand2' src={pointHand} alt="" />
                    <h2 onClick={()=> {context.setLanguageSelected('2');}}>English</h2>

                </div>

            </div>
        // </main>
         
    )
  }

export default LanguageScreen
