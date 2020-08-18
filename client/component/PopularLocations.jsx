import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '60%',
  height: '60%'
};

export class PopularLocations extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
         lat: 29.971509,
         lng: -90.103807
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDkP-SuWhs1qqsN1GpQuTfrpGU7WyFn4dU'
})(PopularLocations);