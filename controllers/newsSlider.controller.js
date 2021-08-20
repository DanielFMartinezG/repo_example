const mongose = require("../conexion");

const news  =  mongose.model("news", {
    img_new_src: String,
    title_new: String,
    link_new: String
})

const insertNew = async (req, res) =>{
    const {img, title, link} = req.body;

   if(!img || !title || !link){
        res.status(401).json({resultado  : "Noticia invalida"})
    }else{
        let noticia = {
            img_new_src : img,
            title_new: title,
            link_new: link
        }
        
       try {
           const result = new news(noticia);
           const response = await result.save();
           res.status(200).json({msq: "Noticia insertada con exito", resultado: response})
       }catch (e) {
           console.log("Error en la inserción de la Noticia");
           res.status(400).json({ msq: "Error en la inserción de la Noticia" ,  resultado  : e})
       }
    }
}

const getNews = async (req, res) =>{
    try {
        const response = await news.find({ });
        res.status(200).json({msq: "Noticias obtenidas con exito", resultado: response})
    } catch (e) {
        console.log(e)
        res.status(400).json({ msq : "Ocurrio un error al obtener las Noticias" ,  resultado  : e})
    }
}

const deleteNew = async (req, res) =>{
    const {id} = req.body;

    if(!id){
        res.status(401).json({ status : false ,  resultado  : "ID invalida"})
    }else{
        try {
            const response = await news.deleteOne({ _id: id });
            res.status(200).json({msq: "Noticia eliminada con exito"})
        } catch (e) {
            console.log(e)
            res.status(400).json({ msq : "Ocurrio un error al eliminar la Noticia" ,  resultado  : e})
        }
    }
}

exports.insertNew = insertNew
exports.getNews = getNews
exports.deleteNew = deleteNew