Meteor.publish('OpenHouses', function() {
    return OpenHouses.find({author: this.userId});
});

Meteor.publish('OpenHouse', function(id) {
    check(id, String);
    return OpenHouses.find({_id: id});
});