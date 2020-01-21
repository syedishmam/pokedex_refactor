import React from 'react';

import GenInfo from './gen_info_card/GenInfo.js';

import './styles/Profile.css';

class Profile extends React.Component {
    render() {
        return (
            <div className="profileContainer">
                <GenInfo />
            </div>
        )
    }
}

export default Profile;