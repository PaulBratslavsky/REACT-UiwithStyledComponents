import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger/burger';
import Menu from '../Menu/menu';

import { Container } from '../../stylesJS/Container';

const HeaderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 75px;
    width: 100%;
    background: none;

    display: flex;
    align-items: center;
`;

const Header = () => {

    const [open, setOpen] = React.useState(false);

    return(
        <HeaderContainer>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open}/>
        </HeaderContainer>
    )
}

export default Header;