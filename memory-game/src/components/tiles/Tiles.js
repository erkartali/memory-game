import React from 'react';
import styles from './Tiles.module.css';
import { Card } from 'react-bootstrap';
import { Flex } from '../flex/Flex'

const tiles = ( props ) => {

    let {image, handleClick, id} = props;

   return (
       
    <Flex
    container
    justifyContent="space-between"
    width="300px"
    >

    <Card onClick={() => handleClick(id)} className={styles.cardWrapper} id={id}  style={{
          backgroundImage: `url(${image})` 
    }}>
      <Card.Img variant="top"   />
    </Card>

  </Flex>

   )
    
   
}

export default tiles;