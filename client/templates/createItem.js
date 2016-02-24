Template.createItem.events({
    'click #createItem': function(e, t){
        e.preventDefault();
        if (!Meteor.userId()) {
            alertify.message("Please Login First");
            return;
        }
        console.log("Item created.");
        var formData = {};
        $.each($('#formCreateItem').serializeArray(), function() {
            formData[this.name] = this.value;
        });
        console.log(formData);
        Meteor.call('createItemServerSide', formData, function (error, result) {
            if (error) {
                if (error.error === "Not Authorised") {
                    alertify.message(error.message);
                }
                console.log(error.message);
            } else {
                console.log(result);
            }
        });
    }
});

Template.itemsList.helpers({
    'itemsList': function(){
        console.log("'itemsList'");
        console.log(Item.find({}));
        return(Item.find({}));
    }
});

Template.defaultHeader.events({
    'click #login': function(e, t){
        FlowRouter.go('/login');
    },
    'click #logout': function(e, t){
        FlowRouter.go('/logout');
    }
});

Template.defaultHeader.helpers({
    'checkLogin': function(e, t){
        return Meteor.userId();
    }
});
