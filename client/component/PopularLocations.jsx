import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, onGoogleApiLoaded } from 'google-maps-react';
import axios from 'axios';


// const mapStyles = {
//   width: '60%',
//   height: '60%'
// };

function PopularLocations( { google } ) {
	const [ allUsers, setAllUsers ] = useState('');


	useEffect(() => {
		axios.get('/users').then(response => {
		   setAllUsers(response.data)
		   // response.data
		}).catch(err => console.log(err))
	 }, []);

	const mapStyles = {
		width: '60%',
		height: '60%'
	  };
    return (
      <Map
        google={google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
         lat: 29.971509,
         lng: -90.103807
		}}
		>
			{/* {allUsers.map(user => ( <Marker lat={user.lng} lng={user.lat} title={user.username}/>))} */}
		<Marker lat={29.971509} lng={-90.103807} title={'current'} />
		{/* <Marker lat={29.971511} lng={-90.103882} /> */}
      </Map>
    );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDkP-SuWhs1qqsN1GpQuTfrpGU7WyFn4dU'
})(PopularLocations);