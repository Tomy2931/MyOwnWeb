import './styles.css'
import { ArcadeContext } from '../../../../../../../Context'
import { useContext } from 'react'
import paper from './paper.png'



function Email() {
  const context = useContext(ArcadeContext)
    return (
        // <main className={`w-[100%] h-[100%]  ${(context.languageSelected == '6' ?  'onScreenStyle' : 'offScreenStyle')}`}>
        <main className='emailMain'>
            <div className='w-full h-full flex justify-center items-center bg-orange-900'>
              <div className='paperImgDiv relative'> 
                <img className='w-full h-full' src={paper} alt="" /> 
                
                <div>
                  <h2 className='paperTittle'>Name</h2>

                </div>
              </div>
              <div className='sello'> <div className='selloCirc'></div></div>
            </div>
         
        </main>
         
    )
  }

export default Email
