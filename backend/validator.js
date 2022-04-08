const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true, coerceTypes: true, useDefaults: 'empty' });
require('ajv-keywords')(ajv);
require('ajv-formats')(ajv);
require('ajv-errors')(ajv);

exports.signupValidator = (req, res, next) => {

    let schema = {
        type: 'object',
        properties: {
            username: {
                type: "string",
                transform: ['trim'],
                minLength: 5,
                maxLength: 15,
                errorMessage: {
                    minLength: "Your name is too short",
                    maxLength: "Your email is too long."
                }
            },
            email: {
                type: "string",
                format: "email",
                transform: ['trim'],
                maxLength: 50,
                errorMessage: {
                    format: "Your email is not valid. try again",
                    maxLength: "Your email is too long."
                }
            },

            password: {
                type: "string",
                format: "password",
                transform: ['trim'],
                minLength: 2,
                maxLength: 10,
                errorMessage: {
                    format: "Invalid password.",
                    maxLength: "Your password is too long.",
                    minLength: "Your password is too short."
                }
            },
        },
        required: ['email', 'username', 'password'],
        additionalProperties: false,
        errorMessage: {
            required: {
                "username": "Please add a user name.",
                "email": "Please provide an email!",
                "password": "Password is required"
            }
        }
    }

    const validate = ajv.compile(schema);

    validate(req.body);
    next();
}

exports.loginValidator = (req, res, next) => {
    let schema = {
        type: 'object',
        properties: {
            email: {
                type: "string",
                format: "email",
                transform: ['trim'],
                maxLength: 50,
                errorMessage: {
                    format: "Your email is not valid. try again",
                    maxLength: "Your email is too long."
                }
            },

            password: {
                type: "string",
                format: "password",
                transform: ['trim'],
                minLength: 2,
                maxLength: 10,
                errorMessage: {
                    format: "Invalid password.",
                    maxLength: "Your password is too long.",
                    minLength: "Your password is too short."
                }
            },
        },
        required: ['email', 'password'],
        additionalProperties: false,
        errorMessage: {
            required: {
                "email": "Please provide an email!",
                "password": "Password is required"
            }
        }
    }

    const validate = ajv.compile(schema);

    validate(req.body);

    next();
}