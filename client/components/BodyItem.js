import React from 'react';

const BodyItem = (props) => {
    // console.log('individual BodyItem:', props.bodyItem)

    const parts = props.bodyItem;

        return( 
            <div>
                <p id='partBoxes'>Name: {parts.name}<br /> <br /> Classification: {parts.classification}<br /><br /> Purpose: {parts.purpose}<br /> <br /> Parts: {parts.parts}<br/> <br /> Fun fact: {parts.funFact}</p>
            </div>
        )
    }
    
    export default BodyItem;