import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header/header';
import Content from './Components/Content/content';
import Footer from './Components/Footer/footer';

const AppContainer = styled.div`
  height: 100vh;  
  background: #15142d;
  display: grid;
  grid-template-rows: 1fr 100px;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Content />
      <Footer />
    </AppContainer>
  );
}

export default App;