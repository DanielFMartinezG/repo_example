const mongose = require("../conexion");

const hero = mongose.model("hero", {
  text_phrase: String,
  img_phrase_src: String
})

const getPhrases = async (req, res) => {
  try {
    const response = await hero.find({ });
    res.status(200).json({msg: "Las Frases Poderosas se han obtenido con exito", result: response})
  } catch (e) {
    console.log(e)
    res.status(400).json({msg: "Ocurrió un error al obtener las Frases Poderosas", result: e})
  }
}

const insertPhrase = async(req, res) => {
  const {text, img} = req.body
  if(!text || !img) {
    res.status(401).json({result: "Envío de Frase Poderosa no autorizado! Debes enviar los datos completos"})
  } else {
    let powerfulPhrase = {
      text_phrase: text,
      img_phrase_src: img,
    }

    try {
      const result = new hero(powerfulPhrase);
      const response = await result.save();
      res.status(200).json({msg: "Frase Poderosa insertada con exito", result: response})
    } catch (e) {
      console.log("Error en la inserción de la Frase Poderosa")
      res.status(400).json({msg: "Error en la inserción de la Frase Poderosa", result: e})
    }
  }
}

const deletePhrase = async(req, res) => {
  const {id} = req.body;
  
  if(!id) {
    res.status(400).json({status: false, result: "Solicitud incorrecta. Debe poner un ID valido"})
  } else {
    try {
      const response = await hero.deleteOne({_id: id});
      res.status(200).json({msg: "Frase Poderosa eliminada con exito"})
    } catch (e) {
      console.log(e)
      res.status(400).json({msg: "Ocurrio un error al eliminar la noticia", result: e})
    }
  }
}

exports.getPhrases = getPhrases;
exports.insertPhrase = insertPhrase;
exports.deletePhrase = deletePhrase;