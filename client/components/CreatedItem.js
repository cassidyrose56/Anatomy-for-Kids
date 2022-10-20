import React from 'react';

const CreatedItem = (props) => {

    const bodyPart = props.bodyPart;
    
    if (bodyPart !== {}) {
        return( 
            <div >
                <p id='createdBoxes' className='centered'>Name: {bodyPart.name}<br /> Classification: {bodyPart.classification}<br /> Purpose: {bodyPart.purpose}<br /> Parts: {bodyPart.parts} </p>
            </div>
        )
    }
}

    export default CreatedItem;