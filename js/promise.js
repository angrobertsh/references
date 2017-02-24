
Promise.resolve(function1()).then(function2());
Promise.resolve(this.updateBounds(bounds)).then(this.requestAllBathrooms(this.props.filters));

// example2

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout( () => {resolve("Success!")}, 250);
});

myFirstPromise.then( (successMessage) => {
    console.log("Yay! " + successMessage);
});

// jQuery version because Promise isn't supported in IE

const function1 = () => {
  const deferred = $.Deferred();
  function1action(deferred.resolve)
  return deferred.promise()
}

function1().then(function2());

// example 2

let cache = {};

const getData = (val) => {
    // return either the cached value or jqXHR object wrapped Promise
    return $.when(
        cache[ val ] ||
        $.ajax('/foo/', {
            data: { value: val },
            dataType: 'json',
            success: function( resp ){
                cache[ val ] = resp;
            }
        })
    );
}

getData('foo').then((resp) => {
    // do something with the response, which may
    // or may not have been retrieved using an
    // XHR request.
});

// two possibilities

$.when(this.updateBounds(bounds)).then((resp) => {
  this.requestAllBathrooms(filter)
})

$.when(this.updateBounds(bounds)).then(this.requestAllBathrooms(filter));
