import React, { Fragment } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";

// Molecules
import Nav from '../molecules/Nav';
import AllPosts from '../pages/AllPosts';
import DetailPost from '../pages/DetailPost';
import AllUsers from '../pages/AllUsers';
import DetailUser from '../pages/DetailUser';

const MainRouter = () => {

    return(
        <Router>
            <Fragment>
                {/* Menú de navegación */}
                <Nav />
                {/* Dirección de rutas */}
                <Switch>
                    <Route exact path='/' component={AllPosts}></Route>
                    <Route exact path='/posts/:id' component={DetailPost}></Route>
                    <Route exact path='/users' component={AllUsers}></Route>
                    <Route exact path='/users/:id' component={DetailUser}></Route>
                    <Redirect to="/" />
                </Switch>
            </Fragment>
        </Router>
    );

}



export default MainRouter