Template.body.events({
    "click .edit-tabs a": function(event) {
        event.preventDefault();
        $(this).tab('show');
    }
})