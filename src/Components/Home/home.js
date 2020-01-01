import React from 'react';
import { Container, Slider, Spacer } from '../../stylesJS/';
import Card from '../Card/Card';
import ListCard from '../ListCard/listcard';





const Home = () => {

    return (
        <Container>
            <Spacer />
            <Slider>
                <Card />
                <Card />
                <Card />
                <Card />
            </Slider>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
        </Container>
    );
}

export default Home;


/*

<div sytle={{ height: '300px', width: '100%', marginTop: '30px', flex: '0 0 auto' }}>
    <img style={{ display: 'block', objectFit: 'cover', height: '320px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
</div>

*/
