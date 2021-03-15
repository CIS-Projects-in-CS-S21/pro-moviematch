const getAuth = () => {
    alert("Authenticating...");
    var statusCode = 403;
    return {'Status': statusCode};
};

exports.getAuth = getAuth;
