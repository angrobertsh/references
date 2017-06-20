// creates appropriate variables
// can get things out of large state/props
const { north, south, east, west } = {east: 8, north: 3, south: 4, west: 9};
const { onChange, onAutocompleteChange } = this.props;

// gives you variables east = 8, north = 3, south = 4, west = 9
// gives you variables onChange = this.props.onChange, onAutoCompleteChange = this.props.onAutoCompleteChange

// ternary
const size = 1;
const poo = size > 2 ? "bigpoop" : "smallpoop";
