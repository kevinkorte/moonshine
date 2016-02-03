FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/new/open-house', {
    name: 'open-house',
    action() {
        BlazeLayout.render('MainLayout', {main: 'NewOpenHouse'})
    }
})