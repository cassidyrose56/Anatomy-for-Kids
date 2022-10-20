import React, { useState } from 'react';
import BodyItem from './BodyItem.js'

let dbArr = [];

const Body = (props) => {

    const [numOfCreatedItems, setNumOfCreatedItems] = useState(false);

        fetch('/api/controller')
        .then((res) => res.json())
        .then((data) => {
            dbArr = data;
            // console.log(dbArr)
            setNumOfCreatedItems(true)
        })
        .catch((err) => console.log(err)
        );
    
      

		return (
            <div className='centered'>
                <div id='premadeDb'>
                    {dbArr.map((obj, i) => {
                        return <BodyItem bodyItem={obj} key={i}/>
                    })
                        
                    }
                    
                </div>
            </div>
            
        )
}

export default Body;