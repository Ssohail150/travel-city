const TravelItinerary = require("../models/TravelItinerary");

const addItinerary = async (req, res) => {
  try {
    let body = req.body;

    if (!body || !body.title || !body.user || !body.country) {
      return res.status(400).send({
        success: false,
        message: "Required parameters missing",
      });
    }

    let itineraryData = {
      title: body.title,
      user: body.user,
      country: body.country,
    };

    if (body.cities) itineraryData.cities = body.cities;
    if (body.startDate) itineraryData.startDate = body.startDate;
    if (body.endDate) itineraryData.endDate = body.endDate;
    if (body.budget) itineraryData.budget = body.budget;
    if (body.days) itineraryData.days = body.days;
    if (body.isPublic !== undefined) itineraryData.isPublic = body.isPublic;

    let dbRes = await TravelItinerary.create(itineraryData);

    return res.status(201).send({
      success: true,
      message: "Itinerary created successfully!",
      data: dbRes,
    });

  } catch (error) {
    console.log("Error in creating itinerary", error);
    return res.status(500).send({ success: false, message: "Server error" });
  }
};

module.exports ={addItinerary}