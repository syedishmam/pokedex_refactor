import React from 'react';

import DetailedInfoNav from './DetailedInfoNav.js';

import './styles/DetailedInfo.css';

class DetailedInfo extends React.Component {
    render() {
        return (
            <div id="detailedInfoContainer">
                <DetailedInfoNav />
            </div>
        )
    }
}

export default DetailedInfo;