const express = require("express")
const route = express.Router()
const cultureNote = require("../controllers/CultureNote")

route.post("/", cultureNote.createCultureNote)
route.get("/:id", cultureNote.getCultureNote)
route.get("/:id", cultureNote.getCultureNoteById)


module.exports = route