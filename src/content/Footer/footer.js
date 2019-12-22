import React from 'react';
import styled from 'styled-components';
import { AiFillFire, AiOutlineHome, AiOutlineSearch, AiOutlineFire } from "react-icons/ai";
import { FiUser } from "react-icons/fi";




const FooterContainer = styled.div`
    border-top: 1px solid #3d3a68;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;
`;

const TextSpan = styled.span`
        font-size: 0.8rem;
        color: #f6feff;
        transition: 0.4s ease-in-out;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover ${TextSpan} {
        color: #fb2b5e;
    }
    
    svg {
        font-size: 1.8rem;
        color: #f6feff;
        margin-bottom: 0.25rem;
        transition: 0.4s ease-in-out;
    }
    
    svg:hover {
        color: #fb2b5e;
    }
`;

const Footer = () => {
    return(
        <FooterContainer>
            <IconContainer><AiOutlineHome /><TextSpan>Home</TextSpan></IconContainer>
            <IconContainer><AiOutlineFire /><TextSpan>Trending</TextSpan></IconContainer>
            <IconContainer><AiOutlineSearch /><TextSpan>Explore</TextSpan></IconContainer>
            <IconContainer><FiUser /><TextSpan>Dashboard</TextSpan></IconContainer>
        </FooterContainer>
    )
}

export default Footer;