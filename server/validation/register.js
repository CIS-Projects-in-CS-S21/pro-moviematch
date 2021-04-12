const Validator = require('validator');
const isEmpty = require('is-empty');


module.exports = function validateRegisterInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.first_name = !isEmpty(data.first_name) ? data.first_name : '';
    data.last_name = !isEmpty(data.last_name) ? data.last_name : '';

    if (Validator.isEmpty(data.email)){
        errors.email = "Email field is required.";
    } else if (!Validator.isEmail(data.email)){
        errors.email = "Not a valid email";
    }

    if (Validator.isEmpty(data.password)){
        errors.password = "Password field is required.";
    }

    if (Validator.isEmpty(data.first_name)){
        errors.first_name = "First name field is required.";
    }

    if (Validator.isEmpty(data.last_name)){
        errors.last_name = "Last name field is required.";
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    };
};