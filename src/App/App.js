import React from 'react';
import styled from 'styled-components';

import Header from './Header/header';
import Content from './Content/content';
import Footer from './Footer/footer';
import firebase from '../Api/Firebase/firebase';
import { GlobalStateContext } from '../_Context';

const AppContainer = styled.div`
  height: 100vh;  
  background: #15142d;
  display: grid;
  grid-template-rows: 1fr 100px;
`;

function App() {

  const context = React.useContext(GlobalStateContext);

  React.useEffect( () => {
    
    const unsubscribe = firebase.auth.onAuthStateChanged( user => {
      
      if (user) {
        context.setUserState(user);    
      } else {
        context.setUserState(null);
      }
    });

    return () => unsubscribe();

  },[]);


  return (
    <AppContainer>
      <Header user={context.user} />
      <Content />
      <Footer user={context.user} />
    </AppContainer>
  );
}

export default App;
