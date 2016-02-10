Book = new Mongo.Collection("book");

Schema = {};

Schema.Book = new SimpleSchema({

    Title: {
	type: String,
	label: "Title"
    },
    Author: {
	type: String,
	label: "Author"
    },
    ISBN: {
	type: String,
	label: "ISBN"
    }

});

Book.attachSchema(Schema.Book);
