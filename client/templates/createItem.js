Template.createItem.events({
	'click #createItem': function(e, t){
		e.preventDefault();		
	    console.log("Item created.")
		Meteor.call('createItemServerSide', 1, 2, function (error, result) {
			console.log(result)
			})
       }
});
