import React from 'react';
import home1 from '../img/home1.png';
// styles
import {About,Description,ImgContainer,Hide} from '../styles'
// animation
import {motion} from 'framer-motion'



const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amzing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <ImgContainer>
        <img src={home1} alt='Guy holding a camera' />
      </ImgContainer>
    </About>
  );
};



export default AboutSection;
