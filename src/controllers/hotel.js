const Hotel = require("../models/Hotel")

const addHotel = async (req, res) => {
    try {
        sendRes = {
        "success": false,
        "message": "Something went wrong",
        "data": {}
    }

    let hotelDetails = req.body
    if(!hotelDetails || !hotelDetails.name || !hotelDetails.city || !hotelDetails.country){
        sendRes.message = "Kindly fill up the required fields"
        return res.status(400).send(sendRes)
    }

    let createHotel = {
        name: hotelDetails.name,
        city: hotelDetails.city,
        country: hotelDetails.country
    }

    if(hotelDetails.address){
        createHotel.address = hotelDetails.address
    }
    if(hotelDetails.location){
        createHotel.location = hotelDetails.location
    }
    if(hotelDetails.starRating){
        createHotel.starRating = hotelDetails.starRating
    }
    if(hotelDetails.pricePerNight){
        createHotel.pricePerNight = hotelDetails.pricePerNight
    }
    if(hotelDetails.amenities){
        createHotel.amenities = hotelDetails.amenities
    }
    if(hotelDetails.muslimFriendlyScore){
        createHotel.muslimFriendlyScore = hotelDetails.muslimFriendlyScore
    }
    if(hotelDetails.nearbyMosques){
        createHotel.nearbyMosques = hotelDetails.nearbyMosques
    }
    if(hotelDetails.images){
        createHotel.images = hotelDetails.images
    }

    const hotelDBDoc = await Hotel.create(createHotel)

    sendRes.success = true
    sendRes.message = "A new hotel document successfully created"
    sendRes.data = hotelDBDoc

    return res.status(200).send(sendRes)
    } catch (error) {
        console.log("Errro in adding a hotel", error)
        return res.status(500).send(sendRes)
    }
    
}

module.exports = {addHotel}