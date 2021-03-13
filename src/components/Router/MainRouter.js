import React, { Fragment } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";

// Pages
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Users from '../pages/Users';
import User from '../pages/User';

// Molecules
import Nav from '../molecules/Nav';

const MainRouter = () => (


    <Router>
        <Fragment>
            {/* Menú de navegación */}
            <Nav />
            {/* Dirección de rutas */}
            <Switch>
                <Route exact path='/' component={Posts}></Route>
                <Route exact path='/posts/:id' component={Post}></Route>
                <Route exact path='/users' component={Users}></Route>
                <Route exact path='/users/:id' component={User}></Route>
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </Router>
)

export default MainRouter