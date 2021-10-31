import styled from "styled-components";
import React from "react";

function Disney(){


  return (
    <Container>
      <h3>Disney PIXAR</h3>
      <Content>
            <Wrap>  
            <img src="https://whatsondisneyplus.com/wp-content/uploads/2021/05/sdk_logo_rendered_tt_v4_2fe14fb5-scaled.jpeg" alt="" />
            </Wrap>
            <Wrap>  
            <img src="https://hyperpix.net/wp-content/uploads/2020/04/onward-logo-font-free-download-1200x675.jpg" alt="" />
            </Wrap>
            <Wrap>  
            <img src="https://www.whiskynsunshine.com/wp-content/uploads/2020/12/soul-logo-scaled.jpeg" alt="" />
            </Wrap>
            <Wrap>  
            <img src="https://hyperpix.net/wp-content/uploads/2020/05/coco-logo-font-download.jpg" alt="" />
            </Wrap>
        </Content>
    
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Disney;