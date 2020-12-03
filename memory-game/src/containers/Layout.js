import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap'

import Header from '../components/header/Header';
import Tiles from '../components/tiles/Tiles';
import characters from '../data/array.json';
import styles from './Layout.module.css';

// shuffle function
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


class Layout extends Component {
    
    state = {
        currentScore: 0,
        gamesWon: 0,
        characters,
        guessedArray: [],
        setShow: false,
        message: '',
    }
    
    // calls shuffle function on json data
    makeShuffle = () => {
        this.setState({ characters: shuffle(characters) });
    };

    //function to reset scores 
    reset = () => {
        this.setState({currentScore: 0, guessedArray: []})
    }


    // main function that does all of the stuff when a card is clicked
    handleClick = (id) => {

        let guessedArray = this.state.guessedArray;
        let gamesWon = this.state.gamesWon;
        let currentScore = this.state.currentScore;
        const win = 'You guessed them all right!';
        const lose = 'Try again!';

        this.setState({message: ''})

        if (guessedArray.indexOf(id) === -1) {
            //push the id of the clicked card into the guessedArray
            guessedArray.push(id);
            console.log(guessedArray);
            console.log(currentScore)

            //add one to current score
            this.setState({currentScore: currentScore+1});
            
            //shuffle the cards
            this.makeShuffle();

            if (this.state.currentScore === 11) {
                
                // add one to games won value
                this.setState({gamesWon: gamesWon+1})

                //set value of message
                this.setState({message: win})

                // reset values
                this.reset()
            }
            } else {

                //set value of message
                this.setState({message: lose})

                //reset values
                this.reset();
            }
    }
    
    render () {
        // card that is rendered for each character in the array
        const tileList = this.state.characters.map( (character) => 
            <Tiles 
                key={character.id}
                id={character.id}
                image={character.image}
                handleClick = {this.handleClick}
            />
        )

        return (
            <div className={styles.gameWrapper}>
                <div className={styles.wrapper}>
                <h1 className='title'>Memory Game</h1>

                <Header 
                gamesWon={this.state.gamesWon}
                currentScore={this.state.currentScore}
                message={this.state.message}
                />
                </div>

                <Row className={styles.rowStyles}>

                {tileList}


                </Row>
               
            </div>
        )
    }
}

export default Layout;