import styled from 'styled-components';

export const SpanMute = styled.span`
    color: #3d3a68;
    opacity: ${({ opacity }) => opacity ? '0.5' : '1'};
    transition: 0.5s ease-in-out;

    ${({ opacity }) => opacity && `&:hover {
        opacity: 1;
    }`};
    

    
`;