import React from 'react';
import styled from 'styled-components';
import { TextOverlay, BackgroundOverlay } from '../../stylesJS';
import Burger from '../Burger/burger';



const CardContainer = styled.div`
    width: 100%;
    height: 400px;
    flex: 0 0 auto;
    margin-right: 16px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`;

const ImageContainer = styled.div`
    position: relative;
    height: 400px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
`;

export default function Card() {

    const [ toggleVideoState, setToggleVideoState ] = React.useState(false);

    return (
        <CardContainer>
            <div>{
                        toggleVideoState 
                            ?   <div>
                                    <iframe id="ytplayer" type="text/html" width="100%" height="400px"
                                        src="https://www.youtube.com/embed/KGNWFikj-Qo?controls=0"
                                        frameborder="0" allowfullscreen 
                                    />
                                </div>
                                
                            :   <ImageContainer>
                                    <TextOverlay><div style={{textAlign: 'center'}}><h1>Hello</h1><p>Checkout this cool video.</p></div></TextOverlay> 
                                    <BackgroundOverlay /> 
                                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                                </ImageContainer>

                    }</div>
                    <div style={{ position: "absolute", bottom: 0, right: 0, height: '50%', width: '100%', background: 'none'}} ><Burger zindex='150' open={toggleVideoState} setOpen={setToggleVideoState} /></div>

        </CardContainer>
    )
}
