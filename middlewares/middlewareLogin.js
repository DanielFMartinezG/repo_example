require('dotenv').config()
const jwt = require("jsonwebtoken");

const middleLogin = (req, res, next) => {
    const jwtToken = req.headers["authorization"];
    // bearer mitoken
    if (!jwtToken) {
        return res.status(401).json({ msq: "No Autorizado" });
    }
    const jwtClient = jwtToken.split(" ")[1];
    jwt.verify(jwtClient, process.env.LLAVE, (error, decoded) => {
        if (error) {
            return res.status(401).json({ msq: "Token Expired" });
        }
       
        next();
    });
};

exports.middleLogin = middleLogin