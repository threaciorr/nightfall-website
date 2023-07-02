import React from 'react'
import { motion } from 'framer-motion'
import { bgvideo } from '../assets/index'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Typical from 'react-typical'
import './hero.css'

const Hero = () => {
  return (
    <div id='hero'>
        <video autoPlay loop muted playsInline class="video">
            <source src={bgvideo} type="video/mp4" />
        </video>
        <div class="hero-text">
            <div class="text">
                <p>"We be rulers of the seven seas."</p>
                <p>
                    <span>—</span>
                    <span>
                        <Typical 
                            loop={Infinity}
                            steps={[
                                'NIGHTFALL',
                                1000,
                                'SUPERTRAP',
                                1000,
                                'COLLECTIVE',
                                1000,
                                'NIGHTFALL',
                                1000,
                                'SUPERTRAP',
                                1000,
                                'COLLECTIVE',
                                1000,
                                'NIGHTFALL',
                                1000,
                                'SUPERTRAP',
                                1000,
                                'COLLECTIVE',
                                1000,
                                'JEBAĆ',
                                500,
                                'DISA',
                                500,
                                'SKURWYSYNA',
                                500,
                            ]}
                        />
                    </span>
                </p>
            </div>
        </div>
        <div className='motion-container'>
            <a href="#products">
                <div className='motion-scroll'>
                    <motion.dev 
                    animate={{
                        y: [0, 24, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}
                    className='motion-dot'
                    />
                </div>
            </a>
        </div>
    </div>
  )
}

export default Hero;