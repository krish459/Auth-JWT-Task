const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    title:{
        type: String,
        require
    },
    date:{
        type: String,
        require
    },
    description:{
        type: String,
        require
    },
    author:{
        type: String,
        require
    }
},{
    timestamps: true,
})

const itemModel = mongoose.model('item', itemSchema)

module.exports = itemModel