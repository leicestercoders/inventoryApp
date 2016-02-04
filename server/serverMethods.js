// server/serverMethods.js
Meteor.methods({
    "createItemServerSide": function(formData){
        
    console.log(formData);
    //TODO: Insert an item into mongodb  using below sample code
    Item.insert(formData);
    
    return "Creating an item on the server side method.";
    },
})