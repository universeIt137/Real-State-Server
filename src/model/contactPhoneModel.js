const  mongoose = require('mongoose');
const {Schema,model} = mongoose;

const phonesSchema = new Schema({
    phone_number: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
    },
},{timestamps:true,versionKey:false});

const phoneModel = model("phone_number",phonesSchema);

module.exports = phoneModel;