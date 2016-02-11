
Meteor.publishComposite("itemsPub" ,{
    find:  function () {
       return Item.find({})

    }
});

