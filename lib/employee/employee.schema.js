const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['M', 'F']
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
    },
    department: {
        type: String
    }
}, {
    timestamps: true,
});

module.exports = employeeModel = mongoose.model('employee', employeeSchema);

