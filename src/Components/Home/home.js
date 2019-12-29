import React from 'react';
import { Container, Slider, Spacer, BackgroundOverlay, TextOverlay } from '../../stylesJS/';


import styled from 'styled-components';
import Burger from '../Burger/burger';


const Card = styled.div`
    width: 100%;
    height: 400px;
    flex: 0 0 auto;
    margin-right: 16px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`;


const Home = () => {
    const [ toggleVideoState, setToggleVideoState ] = React.useState(false);

    return (
        <Container>
            <Spacer />
            <Slider>

                <Card onClick={() => setToggleVideoState(!toggleVideoState)}>

                    <div>{
                        toggleVideoState 
                            ?   <div>
                                    <iframe style={{zIndex: '300'}} id="ytplayer" type="text/html" width="100%" height="400px"
                                        src="https://www.youtube.com/embed/KGNWFikj-Qo?controls=0"
                                        frameborder="0" allowfullscreen 
                                    />
                                </div>
                                
                            :    <React.Fragment>
                                    <TextOverlay><div style={{textAlign: 'center'}}><h1>Hello</h1><p>Checkout this cool video.</p></div></TextOverlay> 
                                    <BackgroundOverlay /> 
                                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                                </React.Fragment>   

                    }</div>
                    <div style={{ position: "absolute", bottom: 0, right: 0, height: '50%', width: '100%', background: 'none'}} ><Burger open={toggleVideoState} setOpen={setToggleVideoState} /></div>

                </Card>

                <Card onClick={() => setToggleVideoState(!toggleVideoState)}>

                    <div>{
                        toggleVideoState 
                            ?   <div>
                                    <iframe style={{zIndex: '300'}} id="ytplayer" type="text/html" width="100%" height="400px"
                                        src="https://www.youtube.com/embed/KGNWFikj-Qo?controls=0"
                                        frameborder="0" allowfullscreen 
                                    />
                                </div>
                                
                            :    <React.Fragment>
                                    <TextOverlay><div style={{textAlign: 'center'}}><h1>Hello</h1><p>Checkout this cool video.</p></div></TextOverlay> 
                                    <BackgroundOverlay /> 
                                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                                </React.Fragment>   

                    }</div>
                    <div style={{ position: "absolute", bottom: 0, right: 0, height: '50%', width: '100%', background: 'none'}} ><Burger open={toggleVideoState} setOpen={setToggleVideoState} /></div>

                </Card>

                <Card onClick={() => setToggleVideoState(!toggleVideoState)}>

                    <div>{
                        toggleVideoState 
                            ?   <div>
                                    <iframe style={{zIndex: '300'}} id="ytplayer" type="text/html" width="100%" height="400px"
                                        src="https://www.youtube.com/embed/KGNWFikj-Qo?controls=0"
                                        frameborder="0" allowfullscreen 
                                    />
                                </div>
                                
                            :    <React.Fragment>
                                    <TextOverlay><div style={{textAlign: 'center'}}><h1>Hello</h1><p>Checkout this cool video.</p></div></TextOverlay> 
                                    <BackgroundOverlay /> 
                                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                                </React.Fragment>   

                    }</div>
                    <div style={{ position: "absolute", bottom: 0, right: 0, height: '50%', width: '100%', background: 'none'}} ><Burger open={toggleVideoState} setOpen={setToggleVideoState} /></div>

                </Card>
                
                <Card onClick={() => setToggleVideoState(!toggleVideoState)}>
                    <TextOverlay><h1>Hello</h1></TextOverlay> 
                    <BackgroundOverlay /> 
                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                </Card>
                <Card onClick={() => setToggleVideoState(!toggleVideoState)}>
                    <TextOverlay><h1>Hello</h1></TextOverlay> 
                    <BackgroundOverlay /> 
                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                </Card>
            </Slider>
        </Container>
    );
}

export default Home;


/*

<div sytle={{ height: '300px', width: '100%', marginTop: '30px', flex: '0 0 auto' }}>
    <img style={{ display: 'block', objectFit: 'cover', height: '320px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
</div>

*/
