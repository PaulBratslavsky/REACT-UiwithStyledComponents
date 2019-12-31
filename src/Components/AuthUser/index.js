import React from 'react'
import { Container, Spacer, FlexCenter } from '../../stylesJS/';
import CreateUser from './createuser';
import Login from './login';


const AuthUser = () => {
  
  const [ toggleMenuState, setToggleMenuState ] = React.useState(true);

    return (
        <Container style={{height: '100%'}}>
          <FlexCenter>
            { toggleMenuState ? <Login /> : <CreateUser /> }
          </FlexCenter>
          <button onClick={() => setToggleMenuState(!toggleMenuState)}>{ toggleMenuState ? <p>Don't have account</p> : <p>Have account</p> }</button>
        </Container>
    )
}

export default AuthUser;


