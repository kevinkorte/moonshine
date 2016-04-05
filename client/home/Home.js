Template.Home.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('Viewings');
    })
});

Template.Home.helpers({
    viewings: ()=> {
        return Viewings.find();
    }
});

Template.Home.helpers({
    openhouseandshowings: ()=> {
        var people = OpenHouses.find().fetch();
        var posts = Showings.find().fetch();
        var docs = people.concat(posts);
        return _.sortBy(docs, function(doc) {return doc.createdAt;});
    }
});

// Template.body.events({
//     "click .new-open-house": function (event) {
//         $('#insertOpenHouseForm').submit();
//         AutoForm.addHooks("insertOpenHouseForm", {
//             endSubmit: function() {
//                 var formId = this.docId;
//                 var userId = Meteor.userId();
//                 FlowRouter.go('/'+userId+'/'+formId);
//             }
//         });
//     }
// });