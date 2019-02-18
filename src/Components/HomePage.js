import React from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
    box-sizing: border-box;
    min-height: 100vh;
    background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
`;

const ContentDiv = styled.div`
    background: lightgray;
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

const Header = styled.h2`
   background: lightblue;
`

const HomePage = () => {
    return (
        <HomeDiv>
            <ContentDiv>
                <Header> This is my header </Header>
                <div> Here are links to my tings </div>
                <Button
                    href="https://github.com/andrewgough94/"
                    rel="noopener"
                    target="_blank"
                > Github </Button>
                <Button
                    href="https://www.linkedin.com/in/andrew-gough-9b130771"
                    rel="noopener"
                    target="_blank"
                > LinkedIn </Button>
                <Button
                    href="https://medium.com/@andrewgough94/"
                    rel="noopener"
                    target="_blank"
                > Medium </Button>


            </ContentDiv>
        </HomeDiv>
    );
};


export default HomePage;