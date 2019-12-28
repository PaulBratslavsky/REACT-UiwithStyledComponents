import styled from 'styled-components';

export const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #1b1944;
    background-image: linear-gradient(#ff0524, #1b1944);
    opacity: 0.4;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;