import './styles.css'
import maletaIcon from '../../../../imgs/maleta.png'
import threeCubes from '../../../../imgs/threeCubes.png'
import graduationIcon from '../../../../imgs/graduationIcon.png'
import entrevistaIcon from '../../../../imgs/entrevista.png'
import grassIcon from '../../../../imgs/grass.png'
import babyIcon from '../../../../imgs/babyIcon.png'
import JSIcon from '../../../../imgs/JSIcon.png'
import pythonIcon from '../../../../imgs/pythonIcon.png'
import htmlIcon from '../../../../imgs/htmlIcon.png'
import cssIcon from '../../../../imgs/cssIcon.png'
import handshakeIcon from '../../../../imgs/handshakeIcon.png'
import maquetandoIcon from '../../../../imgs/maquetandoIcon.png'
import aliveIcon from '../../../../imgs/aliveIcon.png'
import socialIcon from '../../../../imgs/socialIcon.png'
import catIcon from '../../../../imgs/catIcon.png'
import reactIcon from '../../../../imgs/reactIcon.png'
import tiredIcon from '../../../../imgs/tiredIcon.png'

function MyExperience () {
    return(
        <div className='myExperienceMain'>
            <div className='progressBox'>
                <h2 className='text-red-500 text-lg'>Mi progreso</h2>
                <div className='progressBar flex justify-left'>
                    <div className='w-[70%] h-[90%] bg-red-600 mt-[1.5px] ml-[1.5px] '></div>
                </div>
                <h2 className='text-red-500 text-lg'>70%</h2>
            </div>

            <h2 className='mt-10 mb-10 text-lg text-white'>Logros Bloqueados</h2>

            {/* 1 */}
            <div className='achievementsLockedBox'>
                <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={maletaIcon} alt="" />

                    <div className='achievementsTextsMain ml-5'>
                        <p className='text-white text-lg'>A trabajar</p>
                        <p className='text-white text-[0.7rem]'>Consigue tu primer trabajo como</p>
                        <p className='text-white text-[0.7rem]'>programador</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>0/1</p>
                        <div className='achievementsProgressBar'></div>

                    </div>
                </div>
                {/* 2 */}
                <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={threeCubes} alt="" />

                    <div className='achievementsTextsMain mr-6'>
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

                    <div className='achievementsTextsMain mr-6'>
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

                    <div className='achievementsTextsMain mr-1'>
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

                    <div className='achievementsTextsMain ml-5'>
                        <p className='text-white text-lg'>Levantate</p>
                        <p className='text-white text-[0.7rem]'>Sal de tu casa y toca el pasto </p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>0/1</p>
                        <div className='achievementsProgressBar'></div>
                    </div>
                </div>
            
            
            {/* Unlockeds */}
            <h2 className='mt-5 mb-5  text-lg text-white'>Logros Desbloqueados</h2>
            {/* 1 */}
            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={babyIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>Primeros pasos</p>
                        <p className='text-white text-[0.7rem]'>Aprende un lenguaje de </p>
                        <p className='text-white text-[0.7rem]'>programación </p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                            <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 2 */}

            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={JSIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>JavaScript</p>
                        <p className='text-white text-[0.7rem]'>Aprende el lenguaje de  </p>
                        <p className='text-white text-[0.7rem]'> programacion JavasCript </p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                        <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 3 */}

            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={pythonIcon} alt="" />

                    <div className='achievementsTextsMain mr-5'>
                        <p className='text-white text-lg'>Python</p>
                        <p className='text-white text-[0.7rem]'>Aprende el lenguaje de  </p>
                        <p className='text-white text-[0.7rem]'> programacion Python </p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                        <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 4 */}

            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={htmlIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>Esqueleto</p>
                        <p className='text-white text-[0.7rem]'>Aprende a usar el lenguaje  </p>
                        <p className='text-white text-[0.7rem]'> HTML</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                        <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 5 */}

            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={cssIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>Piel</p>
                        <p className='text-white text-[0.7rem]'>Aprende a usar el lenguaje  </p>
                        <p className='text-white text-[0.7rem]'>CSS</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                        <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 6 */}

            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={handshakeIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>Hermandad</p>
                        <p className='text-white text-[0.7rem]'>Aprende a usar los lenguajes  </p>
                        <p className='text-white text-[0.7rem]'>HTML y CSS</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>2/2</p>
                        <div className='achievementsProgressBar flex justify-center gap-[2.5px] '>
                            <div className='w-[45%] h-[90%] bg-red-600 '></div>
                            <div className='w-[45%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 7 */}
            
            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={maquetandoIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>Maquetando</p>
                        <p className='text-white text-[0.7rem]'>Crea 5 proyectos con HTML </p>
                        <p className='text-white text-[0.7rem]'> y CSS</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>5/5</p>
                        <div className='achievementsProgressBar flex justify-center gap-[2.5px] '>
                            <div className='w-[16.5%] h-[90%] bg-red-600 '></div>
                            <div className='w-[16.5%] h-[90%] bg-red-600 '></div>
                            <div className='w-[16.5%] h-[90%] bg-red-600 '></div>
                            <div className='w-[16.5%] h-[90%] bg-red-600 '></div>
                            <div className='w-[16.5%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 8 */}

            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={aliveIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>¡Está vivo!</p>
                        <p className='text-white text-[0.7rem]'>Implementa Javascript a un </p>
                        <p className='text-white text-[0.7rem]'>proyecto con HTML y CSS</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                        <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 9 */}

            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={socialIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>Linkedin</p>
                        <p className='text-white text-[0.7rem]'>Crea una cuenta en la pagina </p>
                        <p className='text-white text-[0.7rem]'>de Linkedin</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                        <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 10 */}

            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={catIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>GitHub</p>
                        <p className='text-white text-[0.7rem]'>Crea una cuenta en la pagina </p>
                        <p className='text-white text-[0.7rem]'>de GitHub</p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                        <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 11 */}

            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={reactIcon} alt="" />

                    <div className='achievementsTextsMain'>
                        <p className='text-white text-lg'>ReactJS</p>
                        <p className='text-white text-[0.7rem]'>Aprende a usar la libreria de  </p>
                        <p className='text-white text-[0.7rem]'>de JavaScript: ReactJS </p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                        <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

            {/* 12 */}

            
            <div className='achievementsLocked'>
                    <img className='achievementsIcon' src={tiredIcon} alt="" />

                    <div className='achievementsTextsMain mr-20'>
                        <p className='text-white text-lg'>Por fin...</p>
                        <p className='text-white text-[0.7rem]'>Centra un div </p>
                    </div>

                    <div className='achievementsProgressBarMain'>
                        <p className='text-white'>1/1</p>
                        <div className='achievementsProgressBar flex justify-center'>
                        <div className='w-[95%] h-[90%] bg-red-600 '></div>
                        </div>
                    </div>
            </div>

           
            </div>


        </div>
    )
}

export default MyExperience