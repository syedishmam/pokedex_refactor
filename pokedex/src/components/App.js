import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import History from '../history.js';

import Profile from './pokemon_profile/Profile';
import Search from './search/Search.js';

class App extends React.Component {
    render() {
        return (

            <Router history={History}>
                <Switch>
                    <Route path="/search" component={Search}/>
                    <Route path="/profile/:pokemonName" component={Profile}/>
                </Switch>
            </Router>
            
        )
    }
}

export default App