import React from 'react';

import Header from './Header.js';
import NamePlate from './NamePlate.js';

import './styles/GenInfo.css';

class GenInfo extends React.Component {

    renderComponents() {
        return (
            <div id="generalInfoContainer">
                <Header />
                <NamePlate theme={this.props.theme} />
            </div>
        )
    }

    render() {

        return (
            <span>
                {this.renderComponents()}
            </span>
        )
    }
}

export default GenInfo;