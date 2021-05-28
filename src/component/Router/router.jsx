import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SurveySite from "../SurveySite/surveySite";
import App from '../../App';
import NotFound from '../Router/notFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/surveySite' component={SurveySite}/>

            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;