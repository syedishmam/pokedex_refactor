import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import History from '../history.js';

import Profile from './pokemon_profile/Profile';

class App extends React.Component {
    render() {
        return (

            <Router history={History}>
                <Switch>
                    <Route path="/search"/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </Router>
        )
    }
}

export default App