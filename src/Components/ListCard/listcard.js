import React from 'react';
import styled from 'styled-components';
import { TextOverlay, BackgroundOverlay, FlexCenter } from '../../stylesJS';
import { FaRegPlayCircle } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";





const ListCardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 115px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    background: #27264b;
    margin-bottom: 1rem;
`;

const ListImageContainer = styled.div`
    position: relative;
    height: 115px;
    width: 100px;
    overflow: hidden;


    svg {
        font-size: 3rem;
        opacity: 0.75;
    }
`;

const ListContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;
    position: relative;
    height: 100%;
    overflow: hidden;
    padding: 0.35rem;
    margin-left: 0.5rem;
    flex: 1;

    h2 {
        font-size: 1.2rem;
        color: #14dbf4;
    }
    
    p {
        font-size: 0.9rem;
    }

    span {
        font-size: 0.9rem;
    }
`;
export default function ListCard() {

    return (
        <ListCardContainer>

            <ListImageContainer>
                <TextOverlay><div style={{textAlign: 'center'}}><FaRegPlayCircle/></div></TextOverlay> 
                <BackgroundOverlay /> 
                <img style={{ display: 'block', objectFit: 'cover', height: '125px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
            </ListImageContainer>

            <ListContentContainer>
                <h2>My Song </h2>
                <p>Lorem ipsum dolor sit amet consectetur... </p>
                <span> 3 hours ago | Paul</span>
                <div style={{position: "absolute", bottom: '0.5rem', right: '0.5rem', display: 'flex'}}><span>234</span> <IoIosHeartEmpty /></div>
            </ListContentContainer>
        </ListCardContainer>
    )
}
