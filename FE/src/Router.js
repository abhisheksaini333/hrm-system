import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Filter from './components/Filter';
import Details from './components/Details';
import Admin from './components/Admin';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/filter" component={Filter} />
                    <Route path="/details" component={Details} />
                    <Route path="/admin/login" component={Admin} />
                </BrowserRouter>
            </div>
        )
    }
}
