const connectDB = require('../middleware/connectDB');
const EmployeeModel = require('../lib/employee/employee.schema');
const { ObjectId } = require('mongoose').Types;
const express = require('express');
const employeeRoute = express.Router();
const Joi = require('joi');
const utils = require('../lib/employee/utils');

const employeeSchema = Joi.object().keys(
    {
        "firstName": Joi.string().min(3).max(30),
        "lastName": Joi.string().min(3).max(30),
        "mobile": Joi.string().max(12),
        "email": Joi.string(),
        "dob": Joi.string(),
        "gender": Joi.string(),
        "address": Joi.string(),
        "salary": Joi.number(),
        "department": Joi.string()
    }
)

const handler = async (req, res) => {
    const { method, query } = req;
    switch (method) {
        case 'DELETE':
            try {
                if (query) {
                    if (!ObjectId.isValid(query.id)) {
                        return res.status(400).send('Invalid ID!');
                    }
                    const removeEmployee = await EmployeeModel.findByIdAndDelete(query.id);
                    if (removeEmployee) {
                        return res.status(200).send(removeEmployee);
                    } else {
                        return res.status(404).send("Employee not found!");
                    }
                } else {
                    return res.status(400).send('Employee ID is missing!');
                }
            } catch (error) {
                return res.status(503).send("Something went wrong!");
            }
            break;

        default:
            return res.status(405).send("Method Not Allowed!");
            break;
    }
}

module.exports = connectDB(handler)