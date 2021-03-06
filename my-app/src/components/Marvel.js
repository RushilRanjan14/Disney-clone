import styled from "styled-components";
import React from "react";

function Marvel(){


  return (
    <Container>
      <h3>Marvel</h3>
      <Content>
            <Wrap>  
            <img src="https://upload.wikimedia.org/wikipedia/en/f/f7/Spider-Man_No_Way_Home_logo.jpg" alt="" />
            </Wrap>
            <Wrap>  
            <img src="https://i0.wp.com/lylesmoviefiles.com/wp-content/uploads/2019/07/the-falcon-and-the-winter-soldier-title-logo.jpg?ssl=1" alt="" />
            </Wrap>
            <Wrap>  
            <img src="https://www.dafont.com/forum/attach/orig/8/8/885399.jpg" alt="" />
            </Wrap>
            <Wrap>  
            <img src="https://i1.wp.com/marvelstudiosnews.com/wp-content/uploads/2018/12/Avengers-Endgame-Alt-logo.png" alt="" />
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
  grid-template-columns: repeat(4, minmax(0, 1fr));


`;

const Wrap = styled.div`
  padding-top: 56%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
   
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Marvel;