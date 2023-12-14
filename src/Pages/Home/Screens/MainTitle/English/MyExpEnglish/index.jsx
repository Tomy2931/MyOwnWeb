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

function MyExperienceEnglish () {
    const context = useContext(ArcadeContext)
    return(
        <main className={`w-[100%] h-[100%] ${(context.screenView == '8' ?  'onScreenStyle' : 'offScreenStyle')}`}>
            <div className='myExperienceMain'>
                <div className='progressBox'>
                    <h2 className='teachievementTittle text-red-500'>My progress</h2>
                    <div className='progressBar flex justify-left'>
                        <div className='w-[70%] h-[90%] bg-red-600 mt-[1.5px] ml-[1.5px] '></div>
                    </div>
                    <h2 className='teachievementTittle text-red-500'>70%</h2>
                </div>

                <h2 className='machievementTittle t-10 mb-10 text-white'>Lockeds Achievements</h2>

                {/* 1 */}
                <div className='achievementsLockedBox'>
                    <div className='achievementsLocked'>
                        <img className='achievementsIcon' src={maletaIcon} alt="" />

                        <div className='achievementsTextsMain '>
                            <p className='achievementTittle text-white'>Go To Work</p>
                            <p className='text-white'>Get your first job as a</p>
                            <p className='text-white'>programer</p>
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
                            <p className='achievementTittle text-white'>Trilingual</p>
                            <p className='text-white'>Learn 3 programming  </p>
                            <p className='text-white'> languages</p>
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
                            <p className='achievementTittle text-white'>Last Lap</p>
                            <p className='text-white'>Finish the university  </p>
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
                            <p className='achievementTittle text-white'>CV</p>
                            <p className='text-white'>Get your first work </p>
                            <p className='text-white'>interview</p>
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
                            <p className='achievementTittle text-white'>Wake Up</p>
                            <p className='text-white'>Go out and touch the grass </p>
                        </div>

                        <div className='achievementsProgressBarMain'>
                            <p className='text-white'>0/1</p>
                            <div className='achievementsProgressBar'></div>
                        </div>
                    </div>
                
                
                {/* Unlockeds */}
                <h2 className='achievementTittle mt-5 mb-5  text-white'>Unlocked Achievements</h2>
                {/* 1 */}
                <div className='achievementsLocked'>
                        <img className='achievementsIcon' src={babyIcon} alt="" />

                        <div className='achievementsTextsMain'>
                            <p className='achievementTittle text-white'>First Steps</p>
                            <p className='text-white'>Learn a programming  </p>
                            <p className='text-white'>language </p>
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
                            <p className='achievementTittle text-white'>JavaScript</p>
                            <p className='text-white'>Learn the programming   </p>
                            <p className='text-white'> language JavasCript </p>
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
                            <p className='achievementTittle text-white'>Python</p>
                            <p className='text-white'>Learn the programming  </p>
                            <p className='text-white'> language Python </p>
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
                            <p className='achievementTittle text-white'>Skeleton</p>
                            <p className='text-white'>Learn the programming  </p>
                            <p className='text-white'> language HTML</p>
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
                            <p className='achievementTittle text-white'>Skin</p>
                            <p className='text-white'>Learn the programming</p>
                            <p className='text-white'>language CSS</p>
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
                            <p className='achievementTittle text-white'>Brotherhood</p>
                            <p className='text-white'>Learn to use languages  </p>
                            <p className='text-white'>HTML and CSS</p>
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
                            <p className='achievementTittle text-white'>Layout</p>
                            <p className='text-white'>Create 5 projects with HTML </p>
                            <p className='text-white'> and CSS</p>
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
                            <p className='achievementTittle text-white'>¡It's Alive!</p>
                            <p className='text-white'>Implement Javascript to a</p>
                            <p className='text-white'>project with HTML and CSS</p>
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
                            <p className='achievementTittle text-white'>Linkedin</p>
                            <p className='text-white'>Create an account on the page </p>
                            <p className='text-white'>of Linkedin</p>
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
                            <p className='achievementTittle text-white'>GitHub</p>
                            <p className='text-white'>Create an account on the page </p>
                            <p className='text-white'>of GitHub</p>
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
                            <p className='achievementTittle text-white'>ReactJS</p>
                            <p className='text-white'>Learn to use the library  </p>
                            <p className='text-white'>of JavaScript: ReactJS </p>
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

                        <div className='achievementsTextsMain '>
                            <p className='achievementTittle text-white'>Finally...</p>
                            <p className='text-white'>Center a Div</p>
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

export default MyExperienceEnglish