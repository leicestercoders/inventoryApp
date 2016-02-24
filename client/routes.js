"use strict"
// routes for Item creation, update and listing
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
    subscriptions: function(){
        this.register('itemsSubs', Meteor.subscribe('itemsPub'));
    },
    action: function(params) {
        BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "itemsList"});
    }
});
AccountsTemplates.configureRoute('signIn',{
    name: 'signin',
    path: '/login',
    template: 'signInAtForm',
    layoutTemplate: 'defaultLayout',
    layoutRegions: {
        top: 'defaultHeader',
        //footer: 'myfooter'
    },
    contentRegion: 'main'
});
AccountsTemplates.configure({
    // behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
});
FlowRouter.route('/logout', {
    action: function() {
        Meteor.logout(function() {
            console.log("...Logged Out");
            FlowRouter.go('/');
        })
    }
});
FlowRouter.route('/createItem', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params) {
        BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "createItem"});
    }
});
