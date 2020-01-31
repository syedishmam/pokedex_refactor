import React from 'react';

import DetailedInfoNav from './nav_tabs/DetailedInfoNav.js';
import DetailedInfoTab from './nav_tabs/DetailedInfoTab.js';

import './styles/DetailedInfo.css';

class DetailedInfo extends React.Component {
    render() {
        return (
            <div id="detailedInfoContainer">
                <DetailedInfoNav />
                <DetailedInfoTab />
            </div>
        )
    }
}

export default DetailedInfo;