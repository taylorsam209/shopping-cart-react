import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Movie from './pages/Movie';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/movie' component={Movie} />
        </Switch>
    )
}

export default Router;