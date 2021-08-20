const mongose = require("../conexion");

const companies  =  mongose.model("partner_companies", {
    img_src : String,
    companie_name : String
})

const insertCompanie = async (req, res) =>{
    const {url, name} = req.body;

   if(!url || !name){
        res.status(401).json({resultado  : "Compañia invalida"})
    }else{
        let companie = {
            img_src : url,
            companie_name: name
        }
        
       try {
           const result = new companies(companie);
           const response = await result.save();
           res.status(201).json({msq: "Compañia insertada con exito", resultado: response})
       }catch (e) {
           console.log("Error en la inserción de la Compañia");
           res.status(400).json({ msq: "Error en la inserción de la Compañia" ,  resultado  : e})
       }
    }
}

const getCompanies = async (req, res) =>{
    try {
        const response = await companies.find({ });
        res.status(201).json({msq: "Empresas aliadas obtenidas con exito", resultado: response})
    } catch (e) {
        console.log(e)
        res.status(400).json({ msq : "Ocurrio un error al obtener las Empresas" ,  resultado  : e})
    }
}

const deleteCompanies = async (req, res) =>{
    const {id} = req.body;

    if(!id){
        res.status(401).json({ status : false ,  resultado  : "ID invalida"})
    }else{
        try {
            const response = await companies.deleteOne({ _id: id });
            res.status(200).json({msq: "Empresa eliminada con exito"})
        } catch (e) {
            console.log(e)
            res.status(400).json({ msq : "Ocurrio un error al eliminar la Empresa" ,  resultado  : e})
        }
    }
}


exports.insertCompanie = insertCompanie
exports.getCompanies = getCompanies
exports.deleteCompanies = deleteCompanies