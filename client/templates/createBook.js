Template.createBook.events({
	'click #createBook': function(e, t){
		e.preventDefault();		
	    console.log("Book created.")
		var formData = {};
		$.each($('#formCreateBook').serializeArray(), function() {
			formData[this.name] = this.value;
		});
		console.log(formData);
		Meteor.call('createBookServerSide', formData, function (error, result) {
			if (error) {
                console.log(error.message);
            } else {
				console.log(result);
			}
			})
       }
});

Template.bookList.helpers({
	'bookList': function(){
		console.log("'bookList'");
		console.log(Book.find({}));
		return(Book.find({}));
	}
})
