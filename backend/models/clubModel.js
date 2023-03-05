const mongoose = require('mongoose')

const clubSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User',
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
},
{
    timestaps: true
}
)

module.exports = mongoose.model('Club', clubSchema)