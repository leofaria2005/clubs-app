const mongoose = require('mongoose')

const clubSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Please add a name']
    },
    /*description: {
        type: String,
        required: [true, 'Please add a name']
    },
    location: {
        type: String,
        required: [true, 'Please add a name']
    },
    meetingTime: {
        type: String,
        required: [true, 'Please add a name']
    },*/
})

module.exports = mongoose.model('Club', clubSchema)