Template.createItem.events({
	'click #createItem': function(e, t){
		e.preventDefault();		
	    console.log("Item created.")
		var formData = {};
		$.each($('#formCreateItem').serializeArray(), function() {
			formData[this.name] = this.value;
		});
		console.log(formData);
		Meteor.call('createItemServerSide', formData, function (error, result) {
			if (error) {
                console.log(error.message);
            } else {
				console.log(result);
			}
			})
       }
});

Template.itemsList.helpers({
	'itemsList': function(){
		console.log("'itemsList'");
		console.log(Item.find({}));
		return(Item.find({}));
	}
})
