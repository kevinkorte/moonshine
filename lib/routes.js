if(Meteor.isClient) {    
    Accounts.onLogin(function() {
        FlowRouter.go('open-houses');
    });
    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect) {
    if(!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('open-houses');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/new/open-house', {
    name: 'open-houses',
    action() {
        BlazeLayout.render('MainLayout', {main: 'OpenHouses'})
    }
});

FlowRouter.route('/:author/0/:id', {
    name: 'open-house',
    action() {
        BlazeLayout.render('MainLayout', {main: 'OpenHouse'})
    }
})