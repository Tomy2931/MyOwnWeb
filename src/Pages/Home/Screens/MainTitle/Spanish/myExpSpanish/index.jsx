import './styles.css'
import maletaIcon from '../../../../imgs/maleta.png'
import threeCubes from '../../../../imgs/threeCubes.png'
import graduationIcon from '../../../../imgs/graduationIcon.png'
import entrevistaIcon from '../../../../imgs/entrevista.png'
import grassIcon from '../../../../imgs/grass.png'

function MyExperience () {
    return(
        <div className='myExperienceMain'>
            <div className='progressBox'>
                <h2 className='text-red-500 text-lg'>Mi progreso</h2>
                <div className='progressBar'></div>
                <h2>3%</h2>
            </div>
            <h2 className='mt-10 mb-10 text-lg text-white'>Logros Bloqueados</h2>

            {/* 1 */}
            <div className='achievementsLockedBox'>
                <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={maletaIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>A trabajar</p>
                        <p className='text-white text-[0.7rem]'>Consigue tu primer trabajo </p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>0/1</p>
                        <div className='achievementsProgressBar'></div>

                    </div>
                </div>
                {/* 2 */}
                <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={threeCubes} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>Trilingüe</p>
                        <p className='text-white text-[0.7rem]'>Aprendede 3 lenguajes de </p>
                        <p className='text-white text-[0.7rem]'>programación</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>2/3</p>
                        <div className='achievementsProgressBar'>
                            <div className='achievementsProgressBar_mark'></div>
                            <div className='achievementsProgressBar_mark'></div>
                        </div>
                    </div>
                </div>

                {/* 3 */}

                <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={graduationIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>Ultima vuelta</p>
                        <p className='text-white text-[0.7rem]'>Termina la carrera de la </p>
                        <p className='text-white text-[0.7rem]'>facultad</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>2/3</p>
                        <div className='achievementsProgressBar'>
                            <div className='achievementsProgressBar_mark'></div>
                            <div className='achievementsProgressBar_mark'></div>
                        </div>
                    </div>
                </div>

                {/* 4 */}

                <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={entrevistaIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>CV</p>
                        <p className='text-white text-[0.7rem]'>Ten tu primera entrevista </p>
                        <p className='text-white text-[0.7rem]'>laboral</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>0/1</p>
                        <div className='achievementsProgressBar'></div>
                    </div>
                </div>

                {/* 5 */}
              
                <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={grassIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>Levantate</p>
                        <p className='text-white text-[0.7rem]'>Sal de tu casa y toca el pasto </p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>0/1</p>
                        <div className='achievementsProgressBar'></div>
                    </div>
                </div>
            </div>
            
            
            {/* Unlockeds */}

            <h2 className='mt-10 mb-10  text-lg text-white'>Logros Desbloqueados</h2>

            <div className='achievementsUnlockedBox'></div>
        </div>
    )
}

export default MyExperience