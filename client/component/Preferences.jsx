import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from "react-bootstrap";

function Preferences({ open, filterDogs, setIndex, setFilter }) {

  const options = {
    maxAge: null,
    minAge: null,
    breed: null
  }


  // const [ dogDisplay, setDogDisplay ] = useState('');

  // useEffect(() => {
  //   setDogDisplay(dogViews[0]);
  // }, [dogViews]);

  // const dislike = () => {
  //   setIndex(index + 1);
  //   if (index < dogViews.length) {
  //     setDogDisplay(() => dogViews[index]);
  //     setDogDisplayInfo(allDogs[index]);
  //   } else {
  //     setDogDisplay(<div id='choice-box'><div id='alt'>Looks like you've made it through all the dogs in you're area. Please check back later.</div></div>);
  //   }
  // };

  // const addFriend = () => {
  //   axios.post('/friends',  {
  //     id_dog: sessDog.id,
  //     id_friend: dogDisplayInfo.id,
  //     bool_friend: 0
  //   })
  //   .then(() => dislike())
  //   .then(() => console.log('this friend was added'))
  //   .catch((err) => console.error(err, 'we couldn\'t add this friend'));
  // };

  return (
    <div className="prefs">
    <button id='settings' onClick={open}>Menu</button>
      <div>
        Set preferences for the dogs you want to see.
      </div>
      <div className="form-group">
						<label htmlFor="">Min Age:</label>
						<input type="text" name="city" className="form-control" onChange={(e) => {options.minAge = e.target.value}}/>
					</div>
					<div className="form-group">
						<label htmlFor="">Max Age:</label>
						<input type="text" name="area" className="form-control" onChange={(e) => options.maxAge = e.target.value}/>
					</div >
          <div className="form-group">
						<label htmlFor="">Breed:</label>
						<input type="text" name="area" className="form-control" onChange={(e) => options.breed = e.target.value}/>
					</div >
          <button onClick={() => {
        console.log('setting', options)
        setFilter(options)
        filterDogs(options);
        setIndex(0);
        }} text='Submit'>Submit</button>
    </div>
  );
};

export default Preferences;
 