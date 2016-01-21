// server/serverMethods.js
Meteor.methods({
    "createItemServerSide": function(){
        
    //TODO: Insert an item into mongodb  using below sample code
    Item.insert({Name: "Hello  world!", AssetCode: "1234567"});
    
    return "Creating an item on the server side method.";
    },
})