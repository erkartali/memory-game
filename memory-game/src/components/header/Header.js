import React from 'react';
import styles from './Header.module.css';
import Flexbox from 'flexbox-react';

const header = ( props ) => {

    let {currentScore, gamesWon, message} = props;

    return (
        <Flexbox className={styles.scores}>
            <h2>Current Score: {currentScore}</h2>
            <h2>Games Won: {gamesWon}</h2>
            <h2>{message}</h2>

        </Flexbox>
    )
}

export default header;