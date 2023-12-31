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

import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'

function MyExperience () {
    const context = useContext(ArcadeContext)
    return(
        <main className={`w-[100%] h-[100%] ${(context.screenView == '4' ?  'onScreenStyle' : 'offScreenStyle')}`}>
            <div className='myExperienceMain'>
                <div className='progressBox'>
                    <h2 className='text-red-500 text-lg'>My progreso</h2>
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

                        <div className='achievementsTextsMain'>
                            <p className='achievementsTittle text-white'>A trabajar</p>
                            <p className='text-white'>Consigue tu primer trabajo </p>
                            <p className='text-white'>como programador</p>
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
                            <p className='achievementsTittle text-white'>Trilingüe</p>
                            <p className='text-white'>Aprendede 3 lenguajes de </p>
                            <p className='text-white'>programación</p>
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
                            <p className='achievementsTittle text-white'>Ultima vuelta</p>
                            <p className='text-white'>Termina la carrera de la </p>
                            <p className='text-white'>facultad</p>
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
                            <p className='achievementsTittle text-white'>CV</p>
                            <p className='text-white'>Ten tu primera entrevista </p>
                            <p className='text-white'>laboral</p>
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
                            <p className='achievementsTittle text-white'>Levantate</p>
                            <p className='text-white'>Sal de tu casa y toca el pasto </p>
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
                            <p className='achievementsTittle text-white'>Primeros pasos</p>
                            <p className='text-white'>Aprende un lenguaje de </p>
                            <p className='text-white'>programación </p>
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
                            <p className='achievementsTittle text-white'>JavaScript</p>
                            <p className='text-white'>Aprende el lenguaje de  </p>
                            <p className='text-white'> programacion JavasCript </p>
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
                            <p className='achievementsTittle text-white'>Python</p>
                            <p className='text-white'>Aprende el lenguaje de  </p>
                            <p className='text-white'> programacion Python </p>
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
                            <p className='achievementsTittle text-white'>Esqueleto</p>
                            <p className='text-white'>Aprende a usar el lenguaje  </p>
                            <p className='text-white'> HTML</p>
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
                            <p className='achievementsTittle text-white'>Piel</p>
                            <p className='text-white'>Aprende a usar el lenguaje  </p>
                            <p className='text-white'>CSS</p>
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
                            <p className='achievementsTittle text-white'>Hermandad</p>
                            <p className='text-white'>Aprende a usar los lenguajes  </p>
                            <p className='text-white'>HTML y CSS</p>
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
                            <p className='achievementsTittle text-white'>Maquetando</p>
                            <p className='text-white'>Crea 5 proyectos con HTML </p>
                            <p className='text-white'> y CSS</p>
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
                            <p className='achievementsTittle text-white'>¡Está vivo!</p>
                            <p className='text-white'>Implementa Javascript a un </p>
                            <p className='text-white'>proyecto con HTML y CSS</p>
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
                            <p className='achievementsTittle text-white'>Linkedin</p>
                            <p className='text-white'>Crea una cuenta en la pagina </p>
                            <p className='text-white'>de Linkedin</p>
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
                            <p className='achievementsTittle text-white'>GitHub</p>
                            <p className='text-white'>Crea una cuenta en la pagina </p>
                            <p className='text-white'>de GitHub</p>
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
                            <p className='achievementsTittle text-white'>ReactJS</p>
                            <p className='text-white'>Aprende a usar la libreria de  </p>
                            <p className='text-white'>de JavaScript: ReactJS </p>
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

                        <div className='achievementsTextsMain'>
                            <p className='achievementsTittle text-white'>Por fin...</p>
                            <p className='text-white'>Centra un div </p>
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
        </main>
    )
}

export default MyExperience