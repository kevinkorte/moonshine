Template.OpenHouses.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('OpenHouses');
    });
});

Template.OpenHouses.helpers({
    openhouses: ()=> {
        return OpenHouses.find({});
    }
});