import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../../Views/Dashboard/dashboard';
import Explore from '../../Views/Explore/explore';
import Trending from '../../Views/Trending/trending';
import Home from '../../Views/Home/home';
import NotFound from '../../Views/NotFound/notfound';
import AuthUser from '../../Views/AuthUser';
import Add from '../../Views/Add';

const ContentContainer = styled.div`
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { display: none; }
`;

const Content = () => {
    return(
        <ContentContainer>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/trending' component={Trending} />
                <Route path='/explore' component={Explore} />
                <Route path='/add' component={Add} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/login' component={AuthUser} />
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </ContentContainer>
        
    )
}

export default Content;