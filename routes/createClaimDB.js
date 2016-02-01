/**
 * Created by Kevin on 1/31/2016.
 */
var mongoose = require("mongoose");
var exports = module.exports = {};

mongoose.connect('mongodb://localhost/claim');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    console.log("connection to Claims success");
});

var claimSchema = mongoose.Schema({
    mitchellClaim: {
        claimNumber: String,
        claimantFirstName: String,
        claimantLastName: String,
        status: String,
        lossDate: String,
        lossInfo: {
            causeOfLoss: String,
            reportedDate: String,
            lossDescription: String,
        },
        assignedAdjustedID: String,
        vehicles: {
            vehicleDetails: {
                vin: String,
                modelYear: String,
                modelDescription: String,
                engineDescription: String,
                exteriorColor: String,
                licPlate: String,
                licPlateState: String,
                licPlateExpDate: String,
                damageDescription: String,
                mileage: String
            }
        }
    }
});
var claimDB = mongoose.model('Claim',claimSchema);

exports.createClaim = function(mitchellClaims){
    console.log("creating claim");
    var claim = new claimDB({mitchellClaim: mitchellClaims});
    claim.save(function(err){
        if(err){
            console.log(err);
        }else{
            console.log("saved");
        }
    });
}

exports.findClaim = function(claimNumber){
    claimDB.find({mitchellClaim : {claimNumber: claimNumber }}, function(err, claimInfo){
        console.log("finding");
        if(err) return console.log(err);
        if(users.length == 0){
            return false;
        }else{
            return claimInfo;
        }
    });
}