
const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type:String,
        require: ture
    },
    description:{
        type: String,
        required:true    

    },
    tag:{
        type:String,
        default:"Genral"
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('notes', NotesSchema);