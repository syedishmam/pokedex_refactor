import React from 'react';
import {connect} from 'react-redux';

class BaseStats extends React.Component {

    renderBaseStats() {
        if(this.props.infoShown === 'base_stats') {
            return (
                <p>Base Stats</p>
            )
        }
    }

    render() {
        return(
            <div>
                {this.renderBaseStats()}
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {infoShown: state.infoShown.infoShown}
}

export default connect(mapStateToProps)(BaseStats);