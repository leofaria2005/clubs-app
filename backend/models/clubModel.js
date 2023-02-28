const mongoose = require('mongoose')

const clubSchema = mongoose.Schema({
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