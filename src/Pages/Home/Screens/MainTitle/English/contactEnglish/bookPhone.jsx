import './styles.css'
import openBook from '../../../../imgs/openBook.png'
import cruzIcon from '../../../../imgs/cruzIcon.png'
import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'

function bookPhone() {
  const context = useContext(ArcadeContext)
    return (
      <main  className={`w-[100%] h-[100%] absolute  ${(context.isBookOpen == true  ?  'onScreenStyle' : 'offScreenStyle')}`}>
        <div className='bookPhoneMain'>

          <img className='absolute top-10 left-[10%] openBook' src={openBook} alt="" />
          <img className='absolute top-5 right-0 w-14 z-10 cruzIcon' src={cruzIcon} onClick={context.closeBook} alt="" />

        </div>
      </main>
         
    )
  }

export default bookPhone