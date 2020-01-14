import React from 'react';
import { Container, FlexCenter, SpanMute } from '../../_StylesJS';
import CreateUser from './createuser';
import Login from './login';


const AuthUser = () => {
  
  const [ toggleMenuState, setToggleMenuState ] = React.useState(true);

    return (
        <Container style={{height: '100%'}}>
          <FlexCenter>
            { toggleMenuState ? <Login /> : <CreateUser /> }
            <SpanMute opacity="true" onClick={() => setToggleMenuState(!toggleMenuState)}>{ toggleMenuState ? <p>Don't have account?</p> : <p>Have account?</p> }</SpanMute>
            <SpanMute opacity="true" >Forgot Password</SpanMute>
          </FlexCenter>
        </Container>
    )
}

export default AuthUser;


