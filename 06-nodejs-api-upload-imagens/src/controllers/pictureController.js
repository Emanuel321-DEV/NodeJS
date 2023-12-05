
const Picture = require("../models/Picture");

exports.create  = async(request, response) => {

    try {
        
        const { name } = request.body;
        const file = request.file;

        const picture = new Picture({
            name,
            src: file.path,
        });

        await picture.save();

        return response.json({ picture, msg: "Image save with successfull" });

    } catch(error){
        return response.status(500).json({ message: "Error to save image " + error});
    }
    
}