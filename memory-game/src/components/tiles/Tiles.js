import React from 'react';

const tiles = ( props ) => {

    console.log(props.name)

    return (
        <div className="tileWrapper">
            <h3>{props.name}</h3>
            <img src={props.image} height='200px' width='200px'/>
        </div>
    )
}

export default tiles;