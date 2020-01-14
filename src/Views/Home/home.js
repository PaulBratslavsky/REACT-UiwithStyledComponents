import React from 'react';
import { Container, Slider, Spacer, Button } from '../../_StylesJS';
import Card from '../../Components/Card/Card';
import ListCard from '../../Components/ListCard/listcard';





const Home = () => {

    return (
        <Container>
            <Spacer />
            <Slider>
                <Card />
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
            <Button>Load More</Button>
        </Container>
    );
}

export default Home;


/*

<div sytle={{ height: '300px', width: '100%', marginTop: '30px', flex: '0 0 auto' }}>
    <img style={{ display: 'block', objectFit: 'cover', height: '320px', width: '100%' }} src="./img/hero.jpg" alt="Hero Image"/>
</div>

*/
