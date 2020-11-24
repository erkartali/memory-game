import React from 'react';
import styles from './Tiles.module.css';
import { Card } from 'react-bootstrap';

const tiles = ( props ) => {

    let {name, image, handleClick, id} = props;

   return (
       <div className={styles.otherWrapper} >
            <Card onClick={() => handleClick(id)} className={styles.cardWrapper}>
                <Card.Img variant="top" src={image, {id}}  />
   <Card.Body>{id}</Card.Body>
            </Card>
       </div>
   )
    
   
}

export default tiles;