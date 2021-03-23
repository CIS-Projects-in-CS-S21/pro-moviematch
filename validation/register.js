const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateRegisterInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";

    if (Validator.isEmpty(data.email)){
        errors.email = "Email field is required.";
    }

}