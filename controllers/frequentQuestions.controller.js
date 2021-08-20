const mongose = require("../conexion");

const questions  =  mongose.model("questions", {
    title: String,
    text: String
})

const questionsAbout  =  mongose.model("questions_about", {
    title: String,
    text: String
})

const getQuestions = async (req, res) =>{
    try {
        const response = await questions.find({});
        res.status(200).json({msq: "Preguntas de sexualidad obtenidas con exito", resultado: response})
    } catch (e) {
        console.log(e)
        res.status(400).json({ msq : "Ocurrio un error al obtener las Preguntas" ,  resultado  : e})
    }
}

const getQuestionsAbout = async (req, res) =>{
    try {
        const response = await questionsAbout.find({});
        res.status(200).json({msq: "Preguntas de fundacion obtenidas con exito", resultado: response})
    } catch (e) {
        console.log(e)
        res.status(400).json({ msq : "Ocurrio un error al obtener las Preguntas" ,  resultado  : e})
    }
}

exports.getQuestions = getQuestions
exports.getQuestionsAbout = getQuestionsAbout
