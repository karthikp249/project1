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
        case 'POST':
            try {
                if (req.body) {
                    const result = employeeSchema.validate(req.body);
                    if (result.error) {
                        return res.status(400).send(result.error.details);
                    }
                    let requestBody = req.body;
                    if (requestBody.dob) {
                        requestBody.dob = utils.convertDateToISO(requestBody.dob);
                    }
                    const employeeCreate = await EmployeeModel.create(requestBody);
                    return res.status(200).send(employeeCreate);
                } else {
                    return res.status(400).send('Employee details is missing!');
                }
            } catch (error) {
                console.log(error)
                return res.status(503).send("Something went wrong!");
            }
            break;
        default:
            return res.status(405).send("Method Not Allowed!");
            break;
    }
}

module.exports = connectDB(handler)