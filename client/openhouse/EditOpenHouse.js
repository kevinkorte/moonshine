Template.EditOpenHouse.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('OpenHouse', id);
    });
    //console.log(editOpenHou);
});

Template.EditOpenHouse.helpers({
    openhouse: ()=> {
        var id = FlowRouter.getParam('id');
        return OpenHouses.findOne({_id: id});
    }
})

Template.body.events({
    "click .edit-tabs a": function(event) {
        event.preventDefault();
        $(this).tab('show');
    }
});