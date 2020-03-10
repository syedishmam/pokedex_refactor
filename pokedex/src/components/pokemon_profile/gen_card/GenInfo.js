import React from 'react';

import Header from './Header.js';
import NamePlate from './NamePlate.js';

import './styles/GenInfo.css';

class GenInfo extends React.Component {

    renderComponents() {
        let themeColor = {backgroundColor: this.props.theme};

        return (
            <div style={themeColor} id="generalInfoContainer">
                <Header />
                <NamePlate />
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