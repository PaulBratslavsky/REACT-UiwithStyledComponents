import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger/burger';
import Menu from '../Menu/menu';

const HeaderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 75px;
    width: 100%;
    background: none;
`;

const Header = () => {

    const [open, setOpen] = React.useState(false);

    return(
        <HeaderContainer>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open}/>
            <p>Main Header</p>
        </HeaderContainer>
    )
}

export default Header;