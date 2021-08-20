const mongose = require("../conexion");

const imgs  =  mongose.model("slider_about_us_img", {
    img_src : String
})

const insertImage = async (req, res) =>{
    const {url} = req.body;

   if(!url){
        res.status(401).json({resultado  : "URL invalida"})
    }else{
        let imagen = {
            img_src : url
        }
        
        console.log(imagen)

        try {
            const result = new imgs(imagen);
            const response = await result.save();
            res.status(201).json({msq: "URL insertada con exito", resultado: response})
        }catch (e) {
            console.log("Error en la inserción de la URL");
            res.status(400).json({ msq: "Error en la inserción de la URL" ,  resultado  : e})
        }
    }
}

const getImages = async (req, res) =>{
    try {
        const response = await imgs.find({ });
        res.status(200).json({msq: "Imagenes obtenidas con exito", resultado: response})
    } catch (e) {
        console.log(e)
        res.status(400).json({ msq : "Ocurrio un error al obtener las imagenes" ,  resultado  : e})
    }
}

const deleteImages = async (req, res) =>{
    const {id} = req.body;

    if(!id){
        res.status(401).json({ status : false ,  resultado  : "ID invalida"})
    }
    
    try {
        const response = await imgs.deleteOne({ _id: id });
        res.status(200).json({msq: "Imagen eliminada con exito"})
    } catch (e) {
        console.log(e)
        res.status(400).json({ msq : "Ocurrio un error al eliminar la imagen" ,  resultado  : e})
    }
}

exports.insertImage = insertImage
exports.getImages = getImages
exports.deleteImages = deleteImages

