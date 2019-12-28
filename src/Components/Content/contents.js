import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../Dashboard/dashboard';
import Explore from '../Explore/explore';
import Trending from '../Trending/trending';
import Home from '../Home/home';
import NotFound from '../NotFound/notfound';

const ContentContainer = styled.div`
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { display: none; }
`;

const Content = () => {
    return(
        <ContentContainer>
            <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/explore' component={Explore} />
                <Route path='/trending' component={Trending} />
                <Route path='/home' component={Home} />
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </ContentContainer>
        
    )
}

export default Content;