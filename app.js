const mongose = require("./conexion");
require('dotenv').config();
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT
const app = express();
app.use(express.json());


//Integracion
app.use(cors())


//Routes
const sliderAboutUsRoute = require('./routes/sliderAboutUs.routes')
const frecuentQuestions = require('./routes/frequentQuestions.routes')
const partnerCompanies = require('./routes/partnerCompanies.routes')
const newSlider = require('./routes/newsSlider.routes')
const admin = require('./routes/admin.routes')
const heroSlider = require('./routes/heroSlider.routes')
const map = require('./routes/map.routes')
const staff = require('./routes/staff.routes')




//Use Routes
app.use('/aboutus', sliderAboutUsRoute);
app.use('/frequentQuestions', frecuentQuestions);
app.use('/partnerCompanies', partnerCompanies);
app.use('/newSlider', newSlider);
app.use('/admin', admin);
app.use('/heroSlider', heroSlider);
app.use('/map', map);
app.use('/staff', staff);




//servidor
app.listen(PORT,  () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})

