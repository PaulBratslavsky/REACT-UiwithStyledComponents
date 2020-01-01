import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #15142d;
  opacity: 0.98;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  border-right: 2px #e0436f solid;
  
  @media (max-width: 320px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #e0436f;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 320px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`;

const Menu = ({open, setOpen}) => {
    return (
      <StyledMenu open={open}>
        <NavLink onClick={() => setOpen(false)} to='/'>
          <span role="img" aria-label="about us"></span>
          Home
        </NavLink>
        <NavLink onClick={() => setOpen(false)} to='/trending'>
          <span role="img" aria-label="about us"></span>
          Trending
        </NavLink>
        <NavLink onClick={() => setOpen(false)} to='/explore'>
          <span role="img" aria-label="about us"></span>
          Explore
        </NavLink>
        <NavLink onClick={() => setOpen(false)} to='/dashboard'>
          <span role="img" aria-label="about us"></span>
          Dashboard
        </NavLink>
        <NavLink onClick={() => setOpen(false)} to='/login'>
          <span role="img" aria-label="about us"></span>
          Login
        </NavLink>
      </StyledMenu>
    )
  }
  export default Menu;