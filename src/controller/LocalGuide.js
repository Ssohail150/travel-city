const LocalGuide = require('../models/LocalGuide')

// add
const addLocalGuide = async (req, res) => {
    try {
      let giveRes = {
    success: false,
    message: "Something went wrong",
    data: null
}

        let localGuideDetails = req.body

        if (!localGuideDetails || !localGuideDetails.user || !localGuideDetails.city) {

            giveRes.message = "Required Params Missing"

            return res.status(400).send(giveRes)
        }

        let createLocalGuide = {
            user: localGuideDetails.user,
            city: localGuideDetails.city
        }

        if (localGuideDetails.languages) {
            createLocalGuide.languages = localGuideDetails.languages
        }

        if (localGuideDetails.bio) {
            createLocalGuide.bio = localGuideDetails.bio
        }

        if (localGuideDetails.expertise) {
            createLocalGuide.expertise = localGuideDetails.expertise
        }

        if (localGuideDetails.hourlyRate) {
            createLocalGuide.hourlyRate = localGuideDetails.hourlyRate
        }

        if (localGuideDetails.currency) {
            createLocalGuide.currency = localGuideDetails.currency
        }

        if (localGuideDetails.availableDays) {
            createLocalGuide.availableDays = localGuideDetails.availableDays
        }

        if (localGuideDetails.contactWhatsapp) {
            createLocalGuide.contactWhatsapp = localGuideDetails.contactWhatsapp
        }

        if (localGuideDetails.rating) {
            createLocalGuide.rating = localGuideDetails.rating
        }

        let localGuideDbRes = await LocalGuide.create(createLocalGuide)

        if (localGuideDbRes) {

            giveRes.success = true
            giveRes.message = "Local Guide Added Successfully!"
            giveRes.data = localGuideDbRes

            return res.status(201).send(giveRes)
        }

    } catch (error) {

        console.log("Error in adding Local Guide", error)

        giveRes.success = false
        giveRes.message = error.message

        return res.status(500).send(giveRes)
    }
}



module.exports = {
  addLocalGuide,
 
}