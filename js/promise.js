
Promise.resolve(function1()).then(function2());
Promise.resolve(this.updateBounds(bounds)).then(this.requestAllBathrooms(this.props.filters));

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout( () => {resolve("Success!")}, 250);
});

myFirstPromise.then( (successMessage) => {
    console.log("Yay! " + successMessage);
});

// jQuery version because Promise isn't supported in IE
