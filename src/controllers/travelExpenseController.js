const TravelExpense = require('../models/TravelExpense');

const createTravelExpense = async (req, res) => {
    try{
        const travelExpense = await TravelExpense.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Travel expense created succesfully",
            data: travelExpense,
        });                                                     /// agar suuces hua toh
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: null,
        });                                                    /// agar fail hua toh
    }
}   



module.exports = {createTravelExpense,}