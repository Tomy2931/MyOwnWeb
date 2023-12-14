import '../Spanish/styles.css'
import titleLogo from '../../../imgs/TitleLogo.jpg'

import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../Context'

function EnglishMenuTitle() {
    const context = useContext(ArcadeContext)
    return (
        <main className={`w-[100%] h-[100%]  ${(context.screenView == '2' ?  'onScreenStyle' : 'offScreenStyle')}`}>
        <div className='SpanishMenuTitleMainBox'>
            <img className='titleLogo' src={titleLogo} alt="" />
            <div className='menuButtonsBox'>
                <div className='aboutMyButton'>
                    <h2 onClick={()=> {context.setScreenView('7')
                    console.log(context.screenView)
                    ;}}>About Me</h2>
                </div>

                <div className='myExpButton'>
                    <h2 onClick={()=> {context.setScreenView('8');}}>My experience</h2>
                </div>

                <div className='mySkillsButton'>
                    <h2 onClick={()=> {context.setScreenView('9');}}>Skills</h2>
                </div>

                <div className='contactButton'>
                    <h2 onClick={()=> {context.setScreenView('10');}}>Contact</h2>
                </div>
            </div>
        </div>

    </main>
         
    )
  }

export default EnglishMenuTitle

