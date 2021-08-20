const mongoose = require('mongoose');
require('dotenv').config();
const BD_USER = process.env.BD_USER
const BD_NAME = process.env.BD_NAME
const BD_CONTRASENA = process.env.BD_CONTRASENA


mongoose.connect(`mongodb+srv://${BD_USER}:${BD_CONTRASENA}@bdpoderosas.imml1.mongodb.net/${BD_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;