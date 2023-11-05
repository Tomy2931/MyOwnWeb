import './styles.css'
import { ArcadeContext } from '../../../../../../../Context'
import { useContext } from 'react'




function Email() {
  const context = useContext(ArcadeContext)
    return (
        // <main className={`w-[100%] h-[100%]  ${(context.languageSelected == '6' ?  'onScreenStyle' : 'offScreenStyle')}`}>
        <main className='emailMain'>
            <div className='bg-red-200 w-[100%] h-[100%]'>
               
            </div>
         
        </main>
         
    )
  }

export default Email
