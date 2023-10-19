import './styles.css'
import photo8Bits from '../../../../imgs/Perfil8Bits.jpg'
import dialogue from '../../../../imgs/dialogue.png'
import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'

function AboutMySpanish() {
  const context = useContext(ArcadeContext)
    return (
      <main className={`w-[100%] h-[100%] ${(context.languageSelected == '3' ?  'onScreenStyle' : 'offScreenStyle')}`}>

          <div className='aboutMySpanishMain' >

        <div className='tomySection'>
          <img className='photo8Bits rounded-tr rounded-br  border-t-4 border-r-4 border-b-4 border-red-700' src={photo8Bits} alt="" />

          <div className='textBubbleeBox relative '>
            <img className='w-[100%]  top-1 left-0'  src={dialogue} alt="" />
            <p className='dialogueName'> ???</p>
            <p className='dialogueText'> Lorem</p>
            {/* <p className='dialogueText'> gusta que me digan Tomy </p> */}

          </div>
        </div>
          

          <div className='textBox'>

            {/* <p className='textBox_questions' onClick={context.setQuestionNumber('1')}>1. ¿Cuál es tu nombre? </p>
            <p className='textBox_questions' onClick={context.setQuestionNumber('2')}>2. ¿Cual es tu edad? </p>
            <p className='textBox_questions' onClick={context.setQuestionNumber('3')}>3. ¿De dónde sos?</p>
            <p className='textBox_questions' onClick={context.setQuestionNumber('4')}>4. ¿A qué te dedicas?</p>
            <p className='textBox_questions' onClick={context.setQuestionNumber('5')}>5. ¿Cúal es tu experiencia?  </p>
            <p className='textBox_questions' onClick={context.setQuestionNumber('6')}>6. ¿Qué te gusta hacer?  </p> */}
                  
          </div>
        </div>
      </main>
         
    )
  }

export default AboutMySpanish

