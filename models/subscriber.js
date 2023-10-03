const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscriberToChannel: {
        type: String,
        required: true      
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema) //model allows us to interact directly with the database using the schema