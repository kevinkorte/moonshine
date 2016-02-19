OpenHouses = new Mongo.Collection('open-houses');

OpenHouses.allow({
   insert: function(userId, doc) {
       return !!userId;
   },
   update: function(userId, doc) {
      return true;
   }
});

OpenHouseSchema = new SimpleSchema({
    address: {
        type: String,
        label: "Address",
        optional: true,
    },
    city: {
        type: String,
        label: "City",
        optional: true
    },
    state: {
        type: String,
        label: "State",
        optional: true
    },
    zipcode: {
        type: String,
        label: "Zipcode",
        optional: true
    },
    starttime: {
        type: String,
        label: "Start Time",
        optional: true
    },
    endtime: {
        type: Date,
        label: "End Time",
        optional: true
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