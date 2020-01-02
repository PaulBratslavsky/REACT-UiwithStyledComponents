import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header/header';
import Content from './Components/Content/content';
import Footer from './Components/Footer/footer';
import firebase from './Api/Firebase/firebase';

const AppContainer = styled.div`
  height: 100vh;  
  background: #15142d;
  display: grid;
  grid-template-rows: 1fr 100px;
`;

function App() {

  React.useEffect( () => {
    const unsubscribe = firebase.auth.onAuthStateChanged( user => {
      if (user) {

        if ( localStorage.getItem('user' ) === null ) {
          //setUserAction(user);
          // Create user object
          const localUser = {
            user: user.displayName,
            loggedIn: true
          }
          // Save to lacal storage
          localStorage.setItem('user', JSON.stringify(localUser));
        } else {
          // setUserAction(user)
        }              
      } else {
        logOut();
      }
    });

    return () => unsubscribe();

  });

  function logOut() {

    // clearUserAction();
    // Remove local user from local storage
    localStorage.removeItem('user');

  }

  return (
    <AppContainer>
      <Header />
      <Content />
      <Footer />
    </AppContainer>
  );
}

export default App;