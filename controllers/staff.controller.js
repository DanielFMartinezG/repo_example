const mongose = require("../conexion");

const staff  =  mongose.model("staff", {
    img: String,
    name: String,
    position: String
})

const insertStaff = async (req, res) =>{
    const {img, name, position} = req.body;

   if(!img || !name || !position){
        res.status(401).json({resultado  : "elemento de Staff invalido"})
    }else{
        let element_staff = {
            img : img,
            name: name,
            position: position
        }
        
       try {
           const result = new staff(element_staff);
           const response = await result.save();
           res.status(200).json({msq: "Elemento de Staff insertada con exito", resultado: response})
       }catch (e) {
           console.log("Error en la inserción de elemento de Staff");
           res.status(400).json({ msq: "Error en la inserción de elemento de Staff" ,  resultado  : e})
       }
    }
}

const getStaff = async (req, res) =>{
    try {
        const response = await staff.find({ });
        res.status(200).json({msq: "Staff obtenido con exito", resultado: response})
    } catch (e) {
        console.log(e)
        res.status(400).json({ msq : "Ocurrio un error al obtener el Staff" ,  resultado  : e})
    }
}

const deleteStaff = async (req, res) =>{
    const {id} = req.body;

    if(!id){
        res.status(401).json({ status : false ,  resultado  : "ID invalida"})
    }else{
        try {
            const response = await staff.deleteOne({ _id: id });
            res.status(200).json({msq: "Elemento de Staff eliminado con exito"})
        } catch (e) {
            console.log(e)
            res.status(400).json({ msq : "Ocurrio un error al eliminar el elemento de Staff" ,  resultado  : e})
        }
    }
}

exports.insertStaff = insertStaff
exports.getStaff = getStaff
exports.deleteStaff = deleteStaff