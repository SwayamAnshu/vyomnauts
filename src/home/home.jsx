import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './home.css';  // Assuming you have some basic styles here
import StarsCanvas from '../components/starbackground/StarBackground';
import blackhole from '../components/assets/blackhole.webm';
import Aboutus from '../components/aboutus/aboutus';
import Joinus from '../components/joinus/joinus';
import CountdownTimer from '../components/countdown/countdown';
import Footer from '../components/footer/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
const IntroAnimation = ({ onEnd }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="intro-container"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to Vyomnauts
      </motion.h1>
    </motion.div>
  );
};

export default function Home() {
  
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // Set the duration of the intro animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className='star'>
        <StarsCanvas/>
      <div className='video'>
        <video
        autoPlay
        muted
        loop
        // className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover ">
        className='bgvideo'>
        <source src={blackhole} type="video/webm" />
        </video>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className='main-heading'
          >
            <span>We Are</span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
              className='main-heading-vyomnauts'
            >
              VYOMNAUTS
            </motion.div>
          </motion.div>
      {/* <div className='both-countdown'> */}
      {/* <div className='countdown1'>
      <CountdownTimer/> </div>
      <div className='countdown2'>
        <CountdownTimer/>
      </div>
      </div> */}
    </div>

      <CountdownTimer/>
      <Aboutus/>
      <Joinus/>
      <Footer/>
      
    </div>

    </div>
  );
}