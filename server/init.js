Meteor.startup(function () {
    // code to run on server at startup
    BrowserPolicy.content.allowOriginForAll("*.stripe.com/");
    BrowserPolicy.content.allowOriginForAll( 'maps.googleapis.com' );
    BrowserPolicy.content.allowFontDataUrl();
    BrowserPolicy.content.allowImageOrigin("https://*.gstatic.com");
  });