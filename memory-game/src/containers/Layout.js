import React, { Component } from 'react';

import Header from '../components/header/Header';
import Tiles from '../components/tiles/Tiles';
import array from '../data/array.json';

class Layout extends Component {

    state = {
        currentScore: 0,
        gamesWon: 0
    }


    render () {

        const tileList = array.map( (tile, index) => 
            <Tiles 
                name={tile.name}
                key={index}
                image={tile.image}
                clicked={tile.clicked}
            />
        )

        return (
            <div>
                <Header />
                {tileList}
            </div>
        )
    }
}

export default Layout;