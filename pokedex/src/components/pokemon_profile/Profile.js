import React from 'react';
import {connect} from 'react-redux';

import GenInfo from './gen_card/GenInfoContainer.js';

import './styles/Profile.css';
import DetailedInfo from './detailed_card/DetailedInfo.js';

class Profile extends React.Component {
    render() {
        return (
            <div className="profileContainer">
                <GenInfo />
                <DetailedInfo/>
            </div>
        )
    }
}

export default connect()(Profile);