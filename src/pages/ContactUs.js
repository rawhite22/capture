import React from 'react';
// animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <ContactStyle
      style={{ background: '#fff' }}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send us a message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send us a message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send us a message</h2>
        </Social>
      </Hide>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  background-color: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
