"use strict"
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
FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "itemsList"});
    }
});
