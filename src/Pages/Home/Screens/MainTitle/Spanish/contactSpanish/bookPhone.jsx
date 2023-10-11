import './styles.css'
import openBook from '../../../../imgs/openBook.png'
import cruzIcon from '../../../../imgs/cruzIcon.png'


function bookPhone() {
    return (
        <div className='bookPhoneMain'>

          <img className='absolute top-5 right-0 w-14 z-10 cruzIcon' src={cruzIcon} alt="" />
          <img className='absolute top-10 left-55 openBook' src={openBook} alt="" />

        </div>
         
    )
  }

export default bookPhone