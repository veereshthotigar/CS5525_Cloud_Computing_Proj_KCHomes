const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for student details
const demolition_schema =new Schema({}, { strict: false });
const lead_safe_schema =new Schema({}, { strict: false });
const property_violation_schema =new Schema({}, { strict: false });

module.exports =  mongoose.model('demolition', demolition_schema);
module.exports =  mongoose.model('lead_safe', lead_safe_schema);
module.exports =  mongoose.model('property_violation', property_violation_schema);