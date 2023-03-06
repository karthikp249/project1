const connectDB = require('../middleware/connectDB');
const EmployeeModel = require('../lib/employee/employee.schema');

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
        case 'GET':
            try {
                const empData = await EmployeeModel.find();
                console.log(empData)
                return res.status(200).send(empData);
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