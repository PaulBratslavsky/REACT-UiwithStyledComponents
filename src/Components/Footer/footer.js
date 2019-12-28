import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch, AiOutlineFire } from "react-icons/ai";
import { FiUser } from "react-icons/fi";


const FooterContainer = styled.div`
    border-top: 1px solid #3d3a68;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;
`;


const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-size: 0.8rem;
        color: #f6feff;
        transition: 0.4s ease-in-out;
    }
    
    svg {
        font-size: 1.8rem;
        color: #f6feff;
        margin-bottom: 0.25rem;
        transition: 0.4s ease-in-out;
    }

    &:hover > svg  {
        color: #fb2b5e;
    }

    &:hover > span  {
        color: #fb2b5e;
    }
`;

const Footer = () => {
    return(
        <FooterContainer>
            <Link to='/'><IconContainer><AiOutlineHome /><span>Home</span></IconContainer></Link>
            <Link to='/trending'><IconContainer><AiOutlineFire /><span>Trending</span></IconContainer></Link>
            <Link to='/explore'><IconContainer><AiOutlineSearch /><span>Explore</span></IconContainer></Link>
            <Link to='/dashboard'><IconContainer><FiUser /><span>Dashboard</span></IconContainer></Link>
        </FooterContainer>
    )
}

export default Footer;