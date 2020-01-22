import React from 'react';

import Header from './Header.js';
import NamePlate from './NamePlate.js';

import './styles/GenInfo.css';

class GenInfo extends React.Component {
    render() {
        return (
            <div id="generalInfoContainer">
                <Header />
                <NamePlate />
            </div>
        )
    }
}

export default GenInfo;