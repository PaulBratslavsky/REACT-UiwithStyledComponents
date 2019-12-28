import styled from 'styled-components';

export const Slider = styled.div`
    display: flex;
    margin-bottom: 1rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { display: none; }
`;