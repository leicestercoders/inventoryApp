Items = new Mongo.Collection("items");

Schemas = {};

Schemas.Item = new SimpleSchema({
    Name: {
        type: String,
        label: "Name"
    },
    AssetCode: {
        type: String,
        label: "Asset Code"
    }
});

Items.attachSchema(Schemas.Item);
