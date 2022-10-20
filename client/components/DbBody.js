import React, { useState } from 'react';
import BodyItem from './BodyItem.js'

const dbArr = [];

const Body = (props) => {

    const [name, setName] = useState();
    const [classification, setClassification] = useState('');
    const [purpose, setPurpose] = useState('');
    const [parts, setParts] = useState('');

        fetch('/api/controller')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            setName(data.name);
            setClassification(data.classification);
            setPurpose(data.purpose);
            setParts(data.parts);
            dbArr.push(data);
            console.log(dbArr)
            
        })
        .catch((err) => console.log(err)
        );
    
      

		return (
            <div >
				{dbArr.map((obj, i) => {
                    return <BodyItem bodyItem={obj} key={i}/>
                })
                    
				}
            </div>
        )
}

export default Body;