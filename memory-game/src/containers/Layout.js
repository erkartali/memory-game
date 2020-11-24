import React, { Component } from 'react';

import { Container } from 'react-bootstrap'

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

    }
    
    // calls shuffle function on json data
    makeShuffle = () => {
        this.setState({ characters: shuffle(characters) });
    };

    //function to reset scores 
    reset = () => {
        this.setState({currentScore: 0})
        this.setState({guessedArray: []})
    }

    // main function that does all of the stuff when a card is clicked
    handleClick = (id) => {

        let guessedArray = this.state.guessedArray;
        let gamesWon = this.state.gamesWon;
        let currentScore = this.state.currentScore;
        let characters = this.state.characters

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
                alert('Good work champ!')
                
                // add one to games won value
                this.setState({gamesWon: gamesWon+1})

                // reset values
                this.reset()
            }
            } else {
                alert("you guessed that one already!");

                //reset values
                this.reset();
            }
    }
    
    render () {
        // card that is rendered for each character in the array
        const tileList = this.state.characters.map( (character) => 
            <Tiles 
                name={character.name}
                key={character.id}
                id={character.id}
                image={character.image}
                handleClick = {this.handleClick}
            />
        )

        return (
            <div>
                <Header 
                gamesWon={this.state.gamesWon}
                currentScore={this.state.currentScore}
                />

                <Container fluid="md" className={styles.tileWrapper}>

                    {tileList}
                    
                </Container>
            </div>
        )
    }
}

export default Layout;