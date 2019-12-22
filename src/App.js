import React from 'react';
import styled from 'styled-components';
import Header from './content/Header/header';
import Content from './content/Content/contents';
import Footer from './content/Footer/footer';

const AppContainer = styled.div`
  height: 100vh;  
  background: #1b1944;
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
