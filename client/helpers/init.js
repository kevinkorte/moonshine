Meteor.startup(function () {
    // code to run on server at startup
     GoogleMaps.load({
    key: 'AIzaSyCuhdLqjZISeGCqV8mjOgzH7ycNd7lSt1w',
    libraries: 'places'  // also accepts an array if you need more than one
    });
  });