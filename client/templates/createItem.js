Template.createItem.events({
	'click #createItem': function(e, t){
		e.preventDefault();		
        var name = t.find("[id='Name']").value;
        var assetCode = t.find("[id='AssetCode']").value;
        console.log("Creating item ...")
        Meteor.call('createItemServerSide', name, assetCode, function(error, result) {
            if (error) {
                console.log(error.message);
            } else {
                console.log(result || "Item created.");
            }
        });
    }
});
