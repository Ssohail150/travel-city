const Place = require("../models/Place")

let sendRes ={
    success:false,
    message: "Something went wrong",
    data: {}
}

const addPlace = async (req,res)=>
    {
    try {
        let placeDetails = req.body

        if(!placeDetails || !placeDetails.name || !placeDetails.city || !placeDetails.country)
        {
           sendRes.message =  "Required Parameters are missing";
           return res.status(400).send(
            sendRes
           )
        }
        letcreatePlace = {
            city:placeDetails.city,
            name:placeDetails.name,
            country:placeDetails.country
        }
        if(placeDetails.category){
           createPlace.category = placeDetails.category
        }
        if(placeDetails.description){
           createPlace.description = placeDetails.description
        }
        if(placeDetails.address){
           createPlace.address = placeDetails.address
        }
         if(placeDetails.location){
           createPlace.location = placeDetails.location
        }
         if(placeDetails.entryFee){
           createPlace.entryFee = placeDetails.entryFee
        }
         if(placeDetails.openingHours){
           createPlace.openingHours = placeDetails.openingHours
        }
          if(placeDetails.images){
           createPlace.images = placeDetails.images
        }
          if(placeDetails.tags){
           createPlace.tags = placeDetails.tags
        }

        let placeDbRes = await Place.create(placeDetails)

        if(placeDbRes){
            sendRes.success = true
            sendRes.message = "Place added succesfully"
            sendRes.data = placeDbRes
            return res.status(201).send(sendRes)
        } 
    } catch (err){
        console.log("error in getting place",err)
        return res.status(500).send(sendRes)
    }
}

module.exports = 
{addPlace}