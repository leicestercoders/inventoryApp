Item = new Mongo.Collection("item");

Schema = {};

Schema.Item = new SimpleSchema({
    Name: {
        type: String,
        label: "Name"
    },
    AssetCode: {
        type: String,
        label: "Asset Code"
    }
});

Item.attachSchema(Schema.Item);
