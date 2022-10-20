import React from 'react';

const BodyItem = (props) => {

    const parts = props.bodyItem;
    
    if (parts) {
        return( 
            <div>
                <p id='partBoxes'>Name: {parts.name}<br /> Purpose: {parts.purpose}<br /> Parts: {parts.parts} </p>
            </div>
        )
    }
    
}

    export default BodyItem;