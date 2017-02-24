coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}

this.props.router.push({
  pathname: "bathrooms/new",
  query: coords
});

lat = this.props.location.query.lat
lng = this.props.location.query.lng
