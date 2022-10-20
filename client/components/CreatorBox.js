import React, { Component, useState } from 'react';
import CreatedItem from './CreatedItem';

let returnArr = [];

const CreatorBox = () => {

  const [name, setName] = useState('');
  const [classification, setClassification] = useState('Choose an option');
  const [purpose, setPurpose] = useState('');
  const [parts, setParts] = useState('');
  const [funFact, setFunFact] = useState('');
  const [numOfCreatedItems, setNumOfCreatedItems] = useState(0);

  let part = { name, classification, purpose, parts };

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
        // console.log('returnArr:', returnArr);
        setNumOfCreatedItems(numOfCreatedItems + 1)
      })
      .then(() => {
        setName('')
        setClassification('Choose an option')
        setPurpose('')
        setParts('')
      })
      .catch((err) => console.log(err))
    };

        return(
          <div id='creatorDb' className='centered'>
            <div id='creatorBox' className='text'> 
              <h4 id='creatorBoxTitle' className='centered'>Add a new item</h4>
              <form className='centered'>
              <label>Name</label>
                <input type='text' value={name} className='inputBoxes' onChange={(e) => setName(e.target.value)}></input>
              <label><br/>Classification</label>
                <select className='inputBoxes' value={classification} onChange={(e) => setClassification(e.target.value)}>
                  <option value='choose'>Choose an option</option>
                  <option value='bone'>Bone</option>
                  <option value='organ'>Organ</option>
                  <option value='muscle'>Muscle</option>
                  <option value='other'>Other parts of the body</option>
                </select>
              <label><br/>Purpose</label>
                <input type='text' className='inputBoxes' value={purpose} onChange={(e) => setPurpose(e.target.value)}></input>
              <label><br/>Parts<br/></label>
                <input type='text' className='inputBoxes'  value={parts} onChange={(e) => setParts(e.target.value)}></input>
                <label><br/>Fun Fact<br/></label>
                <input type='text' className='inputBoxes'  value={funFact} onChange={(e) => setFunFact(e.target.value)}></input><br/>
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