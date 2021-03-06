import React, { Component } from "react";
import "../css/map.css";
import mapboxgl from "mapbox-gl";
import { AuthContext } from "../js/AuthContext";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib2xla3NpaS1sIiwiYSI6ImNrOWcxbHByZDBoMjEzbnFtanA5cXF4dDAifQ.Irs2VyQA206LVGQ0DyH8DA";

export default class Map extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      lng: 30.529,
      lat: 50.4487,
      zoom: 13.5,
    };
  }

  render() {
    if (this.context.isLoggedIn) {
      return (
        <div>
          <div ref={(el) => (this.mapContainer = el)} className="mapContainer">
            <div className="mapCoord">
              Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
              {this.state.zoom}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>you did not login</div>;
    }
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
}
