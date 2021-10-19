const express = require("express")
const router = express.Router()

const { getAllImages, addImage } = require("../controllers/images")

router.route("/").get(getAllImages).post(addImage)

module.exports = router
