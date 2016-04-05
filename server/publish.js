Meteor.publish('OpenHouses', function() {
    return OpenHouses.find({author: this.userId});
});

Meteor.publish('Showings', function() {
    return Showings.find({author: this.userId});
});

Meteor.publish('OpenHouse', function(id) {
    check(id, String);
    return OpenHouses.find({_id: id});
});

Meteor.publish('OpenHouseAndShowings', function() {
    return [
        OpenHouses.find({}),
        Showings.find({})
    ];
});

Meteor.publish('Viewings', function() {
    return [
        Viewings.find({})
    ];
});