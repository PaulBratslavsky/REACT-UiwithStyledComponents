import React from 'react';
import styled from 'styled-components';
import Header from '../Header/header';

const ContentContainer = styled.div`
    overflow: auto;
`;

const Content = () => {
    return(
        <ContentContainer>
            <p>Main Content</p>
            
        </ContentContainer>
        
    )
}

export default Content;