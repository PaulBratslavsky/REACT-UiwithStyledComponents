import React from 'react';
import { Container } from '../../stylesJS/Container';
import styled from 'styled-components';

const Heading = styled.h1`
    margin-top: 1.4rem;
    font-size: 1.4rem;
    color: #fefdff;
    font-weight: 300;
`;



const Home = () => {
    return (
        <Container>
           <Heading>Home</Heading>
        </Container>
    );
}

export default Home;
