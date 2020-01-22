import React from 'react';

import Cell from './Cell.js';

import './styles/NamePlate.css';

class NamePlate extends React.Component {
    render() {
        return (
            <div className="namePlateContainer">
                <h1 className="pokemonName">Pokemon Name</h1>
                <div className="cells">
                    <Cell />
                    <Cell />
                </div>
            </div>
        )
    }
}

export default NamePlate;