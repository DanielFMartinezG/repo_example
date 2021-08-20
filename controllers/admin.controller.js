const mongose = require("../conexion");
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require("jsonwebtoken");

const admin = mongose.model("admin_poderosa", {
    user: String,
    mail: String,
    password: String
})

const createAdmin = async (req, res) => {
    
    const { user, mail, password } = req.body

    if (!user || !mail || !password) {
        return res.status(400).json({ msq: " datos faltantes" })
    } else {

        const encrypted_password = bcrypt.hashSync(password, 10);

        let administrador = {
            user: user,
            mail: mail,
            password: encrypted_password
        }

        try {
            const result = new admin(administrador);
            const response = await result.save();
            res.status(200).json({ msq: "Administrador creado con exito", resultado: response })

        } catch (error) {
            console.log(`error en la creacion: ${error}`)
        }
    }
}

const getAdmin = async (req, res) =>{
    try {
        const response = await admin.find({ });
        //console.log(response.password)
        res.status(200).json({msq: "Administradores obtenidos con exito", resultado: response})
    } catch (e) {
        console.log(e)
        res.status(400).json({ msq : "Ocurrio un error al obtener los Administradores" ,  resultado  : e})
    }
}

const login = async (req, res) =>{
    try{
        const { mail, password } = req.body;
        //const result = await sequelize.query(`select * from usuario where usuario = "${usuario}"`, { type: sequelize.QueryTypes.SELECT })
        //res.status(200).json({result})
        const result = await admin.findOne({mail: mail});

        //console.log(result)

        const validacion = bcrypt.compareSync(password, result.password);

        if(!validacion){
            res.status(401).json({msq: "Usuario o Contraseña invalida"})
        } else {
                const payload = { mail: mail, password: password };
                const jwtToken = jwt.sign(payload, process.env.LLAVE, {
                    expiresIn: '24h',
                });
                res.status(200).json({
                    msq: "Inicio correcto",
                    token: jwtToken
                })
                
            }
        
    }catch (error) {
        res.status(401).json({msq: "Usuario o Contraseña invalida"})
    }
}

const validateToken = async (req, res) => {
    const { token } = req.params

    if(!token){
        return res.status(401).json({ msq:"datos faltantes", status: false });
    }
    
    jwt.verify(token, process.env.LLAVE, (error, decoded) =>{
        if(error){
            return res.status(401).json({ msq: "Token false", status: false });
        }else{
            return res.status(401).json({ msq: "Token true", status: true });
        }
    })
}

exports.createAdmin = createAdmin
exports.getAdmin = getAdmin
exports.login = login
exports.validateToken = validateToken