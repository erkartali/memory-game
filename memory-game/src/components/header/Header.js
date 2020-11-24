import React from 'react';

import Scores from '../scores/Scores'

const header = ( props ) => {

    let {currentScore, gamesWon} = props;

    return (
        <div>
            Current Score: {currentScore}
            Games Won: {gamesWon}
        </div>
    )
}

export default header;