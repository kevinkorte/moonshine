if(Meteor.isClient) {    
    Accounts.onLogin(function() {
        FlowRouter.go('home');
    });
    Accounts.onLogout(function() {
        FlowRouter.go('front-page');
    });
}

FlowRouter.triggers.enter([function(context, redirect) {
    if(!Meteor.userId()) {
        FlowRouter.go('front-page');
    }
}]);

FlowRouter.route('/', {
    name: 'front-page',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('home');
        }
        BlazeLayout.render('FrontPageLayout');
    }
});

FlowRouter.route('/home', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout', {home: 'Home'});
    }
});

FlowRouter.route('/new', {
    name: 'new',
    action() {
        BlazeLayout.render('MainLayout', {main: 'New'});
    }
});

FlowRouter.route('/new/open-house', {
    name: 'open-houses',
    action() {
        BlazeLayout.render('MainLayout', {main: 'NewOpenHouse'})
    }
});

FlowRouter.route('/new/showing', {
    name: 'new-showings',
    action() {
        BlazeLayout.render('MainLayout', {main: 'NewShowing'})
    }
});

FlowRouter.route('/:author/:id', {
    name: 'open-house',
    action() {
        BlazeLayout.render('MainLayout', {main: 'EditOpenHouse'})
    }
});