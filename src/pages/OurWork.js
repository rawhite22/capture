import React from 'react';
// styles
import styled from 'styled-components';
// routing
import { Link } from 'react-router-dom';
// images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// animations
import { motion } from 'framer-motion';
import {
  pageAnimation,
  photoAnimation,
  fade,
  lineAnimation,
  slider,
  sliderContainer,
} from '../animation';
// hooks
import { UseScroll } from '../components/UseScroll';

const OurWork = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();
  return (
    <Work
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='/work/the-athlete'>
          <Hide>
            <motion.img variants={photoAnimation} src={athlete} alt='Athlete' />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
        <motion.h2>The Racer</motion.h2>
        <motion.div className='line' variants={lineAnimation}></motion.div>
        <Link to='/work/the-racer'>
          <motion.img src={theracer} alt='Racer' />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial='hidden'>
        <motion.h2>Goodtimes</motion.h2>
        <motion.div className='line' variants={lineAnimation}></motion.div>
        <Link to='/work/good-times'>
          <motion.img src={goodtimes} alt='Athlete' />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    border-radius: 5px;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export default OurWork;
