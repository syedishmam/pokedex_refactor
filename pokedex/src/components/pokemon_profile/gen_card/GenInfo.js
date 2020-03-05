import React from 'react';
import {connect} from 'react-redux';

import Header from './Header.js';
import NamePlate from './NamePlate.js';

import './styles/GenInfo.css';

class GenInfo extends React.Component {

    themeColor = {backgroundColor: this.props.theme};

    render() {
        return (
            <div id="generalInfoContainer" style={this.themeColor}>
                <Header />
                <NamePlate />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    }
}

export default connect(mapStateToProps)(GenInfo);