import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger/burger';
import Menu from '../Menu/menu';
import { Container, Heading } from '../../stylesJS';
import { withRouter } from 'react-router-dom';


const HeaderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 55px;
    width: 100%;
    background: #15142d;
    z-index: 200;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Header = (props) => {

    console.log(props, "HEADER");

    const [open, setOpen] = React.useState(false);

    const pageName = props.location.pathname.slice(1);
    const pageNameCapitalize = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    return(
        <HeaderContainer>
            <Heading >{ pageNameCapitalize === '' ? 'Home' : pageNameCapitalize }</Heading>
            <Burger open={open} setOpen={setOpen} />
            
            <Menu open={open} setOpen={setOpen}/>
        </HeaderContainer>
    )
}

export default withRouter(Header);