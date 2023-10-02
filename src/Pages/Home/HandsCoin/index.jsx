import './styles.css'
import HandOpen from '../imgs/manoAbierta.png'
import HandClosed from '../imgs/manoCerrada.png'

function HandsCoin () {

    return(
        <div>
            <img className='closedHand' src={HandClosed} alt="" />
            <img className='openHand' src={HandOpen} alt="" />
        </div>
    )

}

export default HandsCoin; 