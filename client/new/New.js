Template.New.onCreated(function() {
    
});

Template.body.events({
        "click .btn-default": function (event) {
            var k = $(this).data('event');
            console.log(k);
            $("input[name='event']").val(k);
            $("#newShowing").submit();
            
            AutoForm.addHooks("newShowing", {
                endSubmit: function() {
                    var formId = this.docId;
                    var userId = Meteor.userId();
                    console.log(this);
                    FlowRouter.go('/'+userId+'/'+formId);
                }
            });
            
            //We need to submit the form
            //And set the event to the type of event selected
            //Using Autoform hooks
            //Than redirect to that form using the same
            //Set up as home.js
        }
    });