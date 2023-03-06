# Getting Started 

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

## Prerequisites

- nodejs >= 14

## Installation

1. Clone the repo

        git clone https://github.com/karthikp249/project1.git

2. Install NPM packages

        npm install

3. Run server

        npm start

## API Documentaion :

1) **POST**      To create Employee

- url
`http://localhost:3000/api/createEmployee`

**Body**

    {
      "firstName": "Karthik",
      "lastName": "Prakash",
      "mobile": "1234567890",
      "email": "karthik@gmail.com",
      "dob": "24/01/1994",
      "gender": "M",
      "address": "11, Block 1, Manasi Nagar",
      "salary": 500000,
      "department": "IT"
    }

------------

2) **GET**			Get all employee records

- url
`http://localhost:3000/api/getEmployee`

------------
3) **DELETE**			Remove Employee by ID

- url
`http://localhost:3000/api/removeEmployee?id=<mongodbObjectID>`

------------
