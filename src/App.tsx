import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './components/Wrapper.styled'; 
import img from './images.png';
import { Text } from './components/Text.styled';
import { Btn } from './components/Button.styled';


function App() {
  return (
    <div className="App">
      <Wrapper>
          <img src={img} alt='images nature'/>
          <Wrapper wrapperType='conteinerMain'>
              <Text textType={'title'}>Headline</Text>
              <Text textType={'mainText'}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
              <Wrapper wrapperType={'conteinerBtn'}> 
                  <Btn btnType={'primary'}>See more</Btn>
                  <Btn btnType={'outlined'}>Save</Btn>
              </Wrapper>
          </Wrapper>
      </Wrapper>
    </div>
  );
}

export default App;
