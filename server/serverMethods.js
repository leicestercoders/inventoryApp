// server/serverMethods.js
Meteor.methods({
    "createItemServerSide": function(name, assetCode) {
        Item.insert({Name: name, AssetCode: assetCode}, function(error, result) {
            if (error) {
                throw error;
            }
            console.log("Item created. " + (result || ""));
        });
        return "Creating an item on the server side method.";
    },
})