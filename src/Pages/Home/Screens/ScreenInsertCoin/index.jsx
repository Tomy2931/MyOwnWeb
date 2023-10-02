import './styles.css'
import arrowScreen from '../../imgs/arrowScreen.png'


function InsertCoinMain() {
    return (
        <div className='InsertCoinMain'>
            <h2 className= 'select-none' >Insert Coin</h2>
            <img className='rotate-[-90deg] w-20 mt-1 select-none' src= {arrowScreen} alt="" />
        </div>
         
    )
  }

export default InsertCoinMain
