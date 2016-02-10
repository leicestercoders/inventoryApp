// server/serverMethods.js
Meteor.methods({
    'createItemServerSide': function(formData){

	// Log formData to Javascript console
	console.log(formData);
	// Insert an item into mongodb
	Item.insert(formData);
	
	return "Creating an item on the server side method.";
    },
    'createBookServerSide': function(formData){

	// Log formData to Javascript console
	console.log(formData);
	// Insert a book into mongodb
	Book.insert(formData);

	return "Creating a book on the server side method.";
    }

});
