// When you click on the map

google.maps.event.addListener(this.map, 'click', (event) => {
  const coords = getCoordsObj(event.latLng);
  this.handleClick(coords);
});

handleClick(coords) {
  this.props.history.push({
    pathname: 'benches/new',
    search: `lat=${coords.lat}&lng=${coords.lng}`
  });
}

// In the new container

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
});

// In the component

constructor(props) {
  super(props);
  this.coords = {lat: props.lat, lng: props.lng};
}
