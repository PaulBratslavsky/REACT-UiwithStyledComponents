import React from 'react';
import { Container, Slider, Spacer } from '../../stylesJS/';


import styled from 'styled-components';


const Card = styled.div`
    width: 100%;
    height: 400px;
    flex: 0 0 auto;
    margin-right: 16px;
    border-radius: 10px;
    overflow: hidden;
`;


const Home = () => {
    return (
        <Container>
            <Spacer />
            <Slider>
                <Card>
                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                </Card>
                <Card>
                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                </Card>
                <Card>
                    <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&fs=0&modestbranding=1"
                        frameborder="0" allowfullscreen />
                </Card>
                <Card>
                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                </Card>
    
            </Slider>

            <Slider>
                <Card>
                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                </Card>
                <Card>
                    <img style={{ display: 'block', objectFit: 'cover', height: '400px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
                </Card>
                <Card>
                    <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&fs=0&modestbranding=1"
                        frameborder="0" allowfullscreen />
                </Card>
                <Card>
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
