const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },
    roll: {
        type:Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
}, 
{timestamps:true})

const model = mongoose.model("Student",studentSchema)
module.exports = model