// server/serverMethods.js
Meteor.methods({
    'createItemServerSide': function(formData){

        // Log formData to Javascript console
        console.log(formData);
        if (!Meteor.userId()) {
            throw new Meteor.Error("Not Authorised", "Please login as an LHS admin first");
        }
        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-admin'], 'LHS')) {
            throw new Meteor.Error("Not Authorised", "Only an LHS admin can do this");
        }
        // Insert an item into mongodb
        Item.insert(formData);

        return "Creating an item on the server side method.";
    },
    'createBookServerSide': function(formData){

        // Log formData to Javascript console
        console.log(formData);
        // Insert a book into mongodb
        Book.insert(formData);

        return "Creating a book on the server side method.";
    },

    "addUpdateUsersRoles": function () {
        var users
        users = [
            {name:"AdminUser",email:"afareed92@gmail.com",roles:['super-admin'], group:"LHS"},
            {name:"AdminUser",email:"afareed92@gmail.com",roles:['admin'], group:"LHS"},
        ];
        _.each(users, function (NewUserData) {
            var acctUsr = Meteor.users.findOne({'profile.name': NewUserData.name}, {fields: {_id: 1, emails: 1, profile: 1, createdAt: 1}, sort: {createdAt: -1}}) || null;
            if (!acctUsr) {
                console.log("not found user");
                console.log(NewUserData);
                var id = Accounts.createUser({
                    email: NewUserData.email,
                    password: "apple1",
                    profile: { name: NewUserData.name },
                    username: NewUserData.name
                });
            } else {
                id = acctUsr._id;
            }
            //Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});
            Roles.addUsersToRoles(id, NewUserData.roles, NewUserData.group);
            Roles.addUsersToRoles(id, "user", "public");
        });
    },
});
