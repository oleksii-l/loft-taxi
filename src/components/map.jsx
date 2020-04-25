import React, { Component } from "react";
import "../css/map.css";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoib2xla3NpaS1sIiwiYSI6ImNrOWcxbHByZDBoMjEzbnFtanA5cXF4dDAifQ.Irs2VyQA206LVGQ0DyH8DA';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 30.5290,
      lat: 50.4487,
      zoom: 13.5
    };
  }

  render() {
    return <div className='mapContainer' ref={el => this.mapContainer = el} />
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom
    });
    }
  
}
