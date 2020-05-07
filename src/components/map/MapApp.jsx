import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib2xla3NpaS1sIiwiYSI6ImNrOWcxbHByZDBoMjEzbnFtanA5cXF4dDAifQ.Irs2VyQA206LVGQ0DyH8DA";

export class MapApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 30.51,
      lat: 50.45,
      zoom: 13.6,
    };
    this.mapContainerRef = React.createRef();
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainerRef.current,
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

  render() {
    const style = {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      width: "100%",
      height: window.innerHeight - 72,
    };

    return (
      <div style={{ position: "relative", zIndex: -10 }}>
        <div
          style={style}
          ref={this.mapContainerRef}
          className="mapContainer"
        />
      </div>
    );
  }
}
