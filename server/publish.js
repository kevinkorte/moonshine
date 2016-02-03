Meteor.publish('OpenHouses', function() {
    return OpenHouses.find({author: this.userId});
});