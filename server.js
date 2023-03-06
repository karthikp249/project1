const express = require("express");
const bodyParser = require("body-parser")

const getEmployee = require("./api/getEmployee");
const createEmployee = require("./api/createEmployee");
const deleteEmployee = require("./api/deleteEmployee");

const PORT = 3000;
const HOST_NAME = "localhost";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/getEmployee", getEmployee);
app.use("/api/createEmployee", createEmployee);
app.use("/api/removeEmployee", deleteEmployee);

app.listen(PORT, HOST_NAME, () => {
    console.log(`Server running at ${HOST_NAME}:${PORT}`)
})