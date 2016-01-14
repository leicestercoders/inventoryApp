// Simply 'inherites' helpers from AccountsTemplates
Template.atForm.helpers(AccountsTemplates.atFormHelpers);
Template.atForm.onRendered(function(){
    //console.log("atForm rendered.");
});
Template.atForm.helpers({
  any: function (a, b, c) {
    return a || b || c ? true : false;
  },

});
Template.atForm.onDestroyed(function () {
    // deregister from some central store
    //console.log('on Destroyed: '+Accounts.userId());
});
Template.atForm.events({
    'click .ok': function ( event ){
        //console.log("'click .ok'");
        var errorAtForm = Session.get('errorAtForm') || null;
        //console.log(errorAtForm);
        if (errorAtForm !== "errorAtForm"){
            $('.ui.modal').modal('hide');
        }
        //
        //if (Meteor.userId()){
        //    console.log("signedIn");
        //    var lastPath = Session.get('lastPath') || null;
        //    if (lastPath !== null) {
        //        console.log("signedIn :"+lastPath);
        //        delete Session.keys.signedIn;
        //        //FlowRouter.go(lastPath);
        //    }
        //}
        //this.callback && this.callback.apply(this, arguments);
        //$(this).modal('hide');

        //'click .confirmOkay': function(event, template) {
        //    var _this = this,
        //        instance = Template.instance(),
        //        delayTime = $(template.firstNode.offsetParent).modal('setting', 'duration');
        //
        //    this.callback && this.callback.apply(this, arguments);
        //    this.delay && Meteor.setTimeout(function() {
        //        _this.delay.apply(_this, arguments)
        //    }, delayTime);
        //    template.$(template.firstNode.offsetParent).modal('hide');
        //}
    },
    'focus .ok': function ( event ) {
        //console.log("focus .ok");
        //var user;
        //
        //user = {
        //    email: $('[name="at-field-email"]').val(),
        //    password: $('[name="at-field-password"]').val()
        //};
        //Meteor.loginWithPassword(user.email, user.password, function(error) {
        //    if (error) {
        //        //return alert(error.reason);
        //    } else {
        //        //return $('.modal-backdrop').hide();
        //        console.log("login successful");
        //        FlowRouter.go(Session.get('lastPath'));
        //    }
        //});
    },
});