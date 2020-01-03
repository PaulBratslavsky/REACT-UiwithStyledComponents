import React from 'react';
import { Container, FlexCenter } from '../../stylesJS';
import AddForm from './addform';


const Add = () => {
  
    return (
        <Container style={{height: '100%'}}>
          <FlexCenter>
            <AddForm />
          </FlexCenter>
        </Container>
    )
}

export default Add;