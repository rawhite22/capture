import React from 'react';
import home1 from '../img/home1.png';
// styles
import { About, Description, ImgContainer, Hide } from '../styles';
// animation
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className='title'>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amzing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <ImgContainer>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt='Guy holding a camera'
        />
      </ImgContainer>
    </About>
  );
};

export default AboutSection;
