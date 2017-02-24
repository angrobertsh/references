coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}

this.props.router.push({
  pathname: "bathrooms/new",
  query: coords
});
