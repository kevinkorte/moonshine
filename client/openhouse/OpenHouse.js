Template.OpenHouse.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('OpenHouse', id);
    });
});

Template.OpenHouse.helpers({
    openhouse: ()=> {
        var author = FlowRouter.getParam('author');
        var id = FlowRouter.getParam('id');
        return OpenHouses.findOne({_id: id, author: author});
    }
});

Template.NewOpenHouse.rendered = function() {
  this.$('.datepicker').datepicker();
}