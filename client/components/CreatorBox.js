import React, { Component, useState } from 'react';
import BodyItem from './BodyItem.js';
import CreatedItem from './CreatedItem';

let returnArr = [];

const CreatorBox = (props) => {

  const [name, setName] = useState('');
  const [classification, setClassification] = useState('Choose an option');
  const [purpose, setPurpose] = useState('');
  const [parts, setParts] = useState('');
  const [numOfCreatedItems, setNumOfCreatedItems] = useState(0);

  let part = { name, classification, purpose, parts};

    const handleSubmit = (e) => {
      e.preventDefault();

      fetch('/api/controller', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(part)
      })
      .then((res) => res.json())
      .then((data) => {
        returnArr.push(data);
        console.log('returnArr:', returnArr);
        setNumOfCreatedItems(numOfCreatedItems + 1)
      })
      .catch((err) => console.log(err))
    };

        return(
          <div className='centered'>
            <div id='creatorBox' className='text'> 
              <h4 id='creatorBoxTitle' className='centered'>Create Part</h4>
              <form className='centered'>
              <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
              <label><br/>Classification</label>
                <select value={classification} onChange={(e) => setClassification(e.target.value)}>
                  <option value='choose'>Choose an option</option>
                  <option value='bone'>Bone</option>
                  <option value='organ'>Organ</option>
                  <option value='muscle'>Muscle</option>
                  <option value='other'>Other parts of the body</option>
                </select>
              <label><br/>Purpose</label>
                <input type='text' value={purpose} onChange={(e) => setPurpose(e.target.value)}></input>
              <label><br/>Parts<br/></label>
                <input type='text' value={parts} onChange={(e) => setParts(e.target.value)}></input><br/>
              <button type='submit' id='submitButton' onClick={handleSubmit}>Submit</button>
            </form>
            </div>
            
            {
              returnArr.map((item, i) => {
                return <CreatedItem bodyPart={item} key={i} />
              })
            }
          </div>
        )
    }






export default CreatorBox;