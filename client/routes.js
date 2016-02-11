"use strict"
// routes for Item creation, update and listing
FlowRouter.route('/createItem', {
    action: function(params) {
	BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "createItem"});
    }
});
FlowRouter.route('/itemList', {
    action: function(params) {
	BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "itemsList"});
    }
});
FlowRouter.route('/updateItem', {
    action: function(params) {
	BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "updateItem"});
    }
});

// routes for Book creation, update and listing
FlowRouter.route('/createBook', {
    action: function(params) {
	BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "createBook"});
    }
});
FlowRouter.route('/bookList', {
    action: function(params) {
	BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "bookList"});
    }
});
FlowRouter.route('/updateBook', {
    action: function(params) {
	BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "updateBook"});
    }
});

// top-level route
FlowRouter.route('/', {
     subscriptions: function(params,queryParams){
        this.register('itemsSubs', Meteor.subscribe('itemsPub'));
     },
     action: function(params) {
	BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "itemsList"});
    }
});

