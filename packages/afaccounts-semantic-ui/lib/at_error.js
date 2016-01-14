// Simply 'inherites' helpers from AccountsTemplates
Template.atError.helpers(AccountsTemplates.atErrorHelpers);
//Template.atError.onRendered( function() {
//    Session.set('errorAtForm', "errorAtForm");
//    console.log(Session.get('errorAtForm'));
//})