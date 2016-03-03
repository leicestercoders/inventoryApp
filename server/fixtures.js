////////////////////////////////////////////////////////////////////
// Startup Fixtures
//
Meteor.startup(function() {
    // only use once on the new server hosting. comment out or remove after that. STRICTly follow.
    createUsers()
});

function createUsers() {
    Meteor.call("addUpdateUsersRoles", function(error, result) {
        if (error) {
            console.log("error", error);
        }
        if (result) {
            console.log("Successfully did startup fixture functions.");
        }
    });
}
