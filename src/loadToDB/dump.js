let fs = require('fs');
const async = require('async');
const db = require('mongoose'),
db_string = 'mongodb://kc_user_1:Homes77@ds139645.mlab.com:39645/kchomes';
const Schema = db.Schema;
var db_schema = new Schema({}, { strict: false });
var db_model = db.model('demolition', db_schema);
var db_promise = db.connect(db_string,{ useNewUrlParser: true });
db_promise.then((data) => {
    console.log("Database connection is successfull !");
}).catch(reason => {
    console.log("Database connection is unsuccessfull ! : "+reason.message);
});

fs.readFile(__dirname+'/data/demolition.json','utf8', (err, read) => {
    if (err) {
        throw err;
        res.send({message:err.message});
    }
    else{
        let obj = JSON.parse(read);
        async.eachSeries (obj, (value, callback) => {
            if (err) return callback(err);
            let db_collection = new db_model(value);
            db_collection.save((err,data)=>{
                if (err) callback(err);
                console.log('Collection Saved !');
                callback();
            });
        }, err => {
            if (err) console.error(err.message);
            // configs is now a map of JSON data
            console.log('End');
        });
    }
});