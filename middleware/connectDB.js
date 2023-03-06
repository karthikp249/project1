const mongoose = require('mongoose');
const Config = require('../config')
const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.MONGO_URL || Config.MONGO_URL);
    return handler(req, res);
}

module.exports = connectDB;