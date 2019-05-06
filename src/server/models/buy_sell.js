const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for buy/sell details
const buy_sell = new Schema({
    type: String,
    address1:String,
    address2:String,
    city:String,
    state:String,
    country:String,
    zipcode:Number,
    contact_ph:String,
    contact_email:String,
    isRent:Number,
    isSell:Number,
    cost:Number,
    description:String,
    laundry: String,
    heating: String,
    cooling: String,
    pets: String,
    parking: String,
    no_of_bedrooms:Number,
    no_of_bathrooms:Number,
    interior_livable_area:Number,
    home_condition:String,
    utilities:String,
    is_pets_allowed:String,
    nearby_schools:String,
    nearby_hospitals:String,
    nearby_hotels: String,
    nearby_grocerry_shops:String,
    nearby_shopping:String,
    latitude:String,
    longtitude:String,
    created_on:Date,
    updated_on:Date
});

module.exports =  mongoose.model('buy_sell', buy_sell);