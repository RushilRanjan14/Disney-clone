import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Marvel from './Marvel';
import Disney from './Disney';
import Footer from './Footer';

function Home() {
    return (
        <Container>
        
        <ImgSlider />
        <Viewers />
        <Marvel />
        <Disney />
        <Footer />
      
      </Container>

    )
}


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

`;

export default Home
 