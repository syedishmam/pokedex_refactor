import React from 'react';

import DetailedInfoNav from './DetailedInfoNav.js';
import About from './nav_tabs/about_tab/About.js'

import './styles/DetailedInfo.css';

class DetailedInfo extends React.Component {
    render() {
        return (
            <div id="detailedInfoContainer">
                <DetailedInfoNav />
                <About />
            </div>
        )
    }
}

export default DetailedInfo;