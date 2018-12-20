import React from 'react';
import ImagePage from './ImagePage';
import ImageRow from './ImageRow';
import { Route, Switch } from 'react-router-dom';

const Main = () => (
    <div className='main' id='main'>
        <Switch>
            <Route exact path='/' component={ImageRow} />
            <Route path='/:id' component={ImagePage} />
        </Switch>
    </div>
);
export default Main;