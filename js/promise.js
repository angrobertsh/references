
Promise.resolve(function1()).then(function2());
Promise.resolve(this.updateBounds(bounds)).then(this.requestAllBathrooms(this.props.filters));

// example2

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout( () => {resolve("Success!")}, 250);
});

myFirstPromise.then( (successMessage) => {
    console.log("Yay! " + successMessage);
});

// This prints [3, 4] after 10000 ms
Promise.all([new Promise((resolve, reject) => {setTimeout(() => {resolve(3)}, 1000)}), new Promise((resolve, reject) => {setTimeout(() => {resolve(4)}, 10000)})]).then((arr) => console.log(arr))

// This prints 3 after 1000 ms
Promise.race([new Promise((resolve, reject) => {setTimeout(() => {resolve(3)}, 1000)}), new Promise((resolve, reject) => {setTimeout(() => {resolve(4)}, 10000)})]).then((arr) => console.log(arr))

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
  this.requestAllBathrooms(this.props.filters)
})

$.when(this.updateBounds(bounds)).then(this.requestAllBathrooms(this.props.filters));

// you can also save promises and then .resolve them whenever so you don't have to re-make calls

export const fetchAutocompleteValues = (params) => {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: "/admin/autocompletes/",
      data: {filterType: params.filterType, filter: params.filter},
      method: "GET",
      dataType: "json"
    }).then(response => resolve(response))
  });
}

var promises = {};

var filterType = e.target.value;
if(promises[filterType]){  
} else {
  promises[filterType] = fetchAutocompleteValues({filterType: filterType, filter: "thingees"});
}
promises[filterType] = (typeof promises[filterType] !== "undefined" ? promises[filterType] : fetchAutocompleteValues({filterType: filterType, filter: "thingees"}));

var list;
promises[query].then(values => list = values);
console.log(list);
