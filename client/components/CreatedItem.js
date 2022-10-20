import React from 'react';

const CreatedItem = (props) => {

    const bodyPart = props.bodyPart;
    console.log(bodyPart.name)

    const deletePart = (e) => {
        e.preventDefault();
        fetch('/api/delete', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(bodyPart.name)
        }) 
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log('Deletion Error in CreatedItem:', err))
    }
    
    if (bodyPart !== {}) {
        return( 
                
                <p id='createdBoxes'>
                     Name: {bodyPart.name} <br /> <br /> 
                     Classification: {bodyPart.classification}<br /> <br /> 
                     Purpose: {bodyPart.purpose}<br /> <br /> 
                     Parts: {bodyPart.parts} <br /> <br /> 
                     Fun Fact: {bodyPart.funFact}</p>
            
        )
    }
}

    export default CreatedItem;