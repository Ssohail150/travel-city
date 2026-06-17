const mosque = require("../models/Mosque");

let sendRes = {
    success: false,
    message: 'Something went wrong',
    data: null
}
const addMosque = async (req, res) => {
    try {
        let mosqueDetails = req.body;

        if (!mosqueDetails || !mosqueDetails.name ||!mosqueDetails.city ||!mosqueDetails.country) 
            {
            return res.status(400).send({
                success: false,
                message: "Required Params missing",
                data: null,
            });
        }

        let createMosque = {
            name:mosqueDetails.name,
            city:mosqueDetails.city,
            country:mosqueDetails.country
        }
    
        if(mosqueDetails.address){
            createMosque.address = mosqueDetails.address
        }
    
        if(mosqueDetails.location){
            createMosque.location = mosqueDetails.location
        }
        if(mosqueDetails.capacity){
            createMosque.capacity= mosqueDetails.capacity
        }
        if(mosqueDetails.sect){
            createMosque.sect= mosqueDetails.sect
        }
        if(mosqueDetails.facilities){
            createMosque.facilities = mosqueDetails.facilities
        }
        if(mosqueDetails.jummahTime){
            createMosque.jummahTime = mosqueDetails.jummahTime
        }
        if(mosqueDetails.description){
            createMosque.description = mosqueDetails.description
        }
        if(mosqueDetails.images){
            createMosque.images = mosqueDetails.images
        }
        let mosqueDbRes = await mosque.create(createMosque)
    
        if(mosqueDbRes){
            sendRes.success = true
            sendRes.message = "Mosque added successfully!"
            sendRes.data = mosqueDbRes
            return res.status(200).send(sendRes)
        }
    } catch (error) {
        console.log("Errro in adding Mosque", error)
        return res.status(500).send(sendRes)
    }
}
module.exports = {addMosque}