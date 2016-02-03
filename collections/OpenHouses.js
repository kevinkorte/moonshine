OpenHouses = new Mongo.Collection('open-houses');

OpenHouses.allow({
   insert: function(userId, doc) {
       return !!userId;
   } 
});

OpenHouseSchema = new SimpleSchema({
    address: {
        type: String,
        label: "Address"
    },
    city: {
        type: String,
        label: "City"
    },
    state: {
        type: String,
        label: "State"
    },
    zipcode: {
        type: String,
        label: "Zipcode"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

OpenHouses.attachSchema( OpenHouseSchema );