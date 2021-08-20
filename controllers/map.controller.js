const mongose = require("../conexion");

const map  =  mongose.model("map", {
    ID_departament: String,
    name_event: String,
    descripcion: String
})

const insertEvent = async (req, res) =>{
    const {departamento, evento, descripcion } = req.body;

   if(!departamento || !evento){
        res.status(401).json({resultado  : "Evento del mapa invalido"})
    }else{
        let event = {
            ID_departament : departamento,
            name_event: evento,
            descripcion: descripcion
        }
        
       try {
           const result = new map(event);
           const response = await result.save();
           res.status(200).json({msq: "Evento de mapa insertado con exito", resultado: response})
       }catch (e) {
           console.log("Error en la inserción del evento");
           res.status(400).json({ msq: "Error en la inserción del evento" ,  resultado  : e})
       }
    }
}

const getEvent = async (req, res) =>{
    try {
        const response = await map.find({ });
        res.status(200).json({msq: "Eventos de departamentos obtenidos con exito", resultado: response})
    } catch (e) {
        console.log(e)
        res.status(400).json({ msq : "Ocurrio un error al obtener los eventos" ,  resultado  : e})
    }
}

const deleteEvent = async (req, res) =>{
    const {id} = req.body;

    if(!id){
        res.status(401).json({ status : false ,  resultado  : "ID invalida"})
    }else{
        try {
            const response = await map.deleteOne({ _id: id });
            res.status(200).json({msq: "Evento de departamento eliminado con exito"})
        } catch (e) {
            console.log(e)
            res.status(400).json({ msq : "Ocurrio un error al eliminar el evento" ,  resultado  : e})
        }
    }
}

exports.insertEvent = insertEvent
exports.getEvent = getEvent
exports.deleteEvent = deleteEvent