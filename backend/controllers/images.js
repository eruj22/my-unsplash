const Image = require("../models/image")

const getAllImages = async (req, res) => {
  const images = await Image.find({})
  res.status(200).json({ images })
}

const addImage = async (req, res) => {
  const image = await Image.create(req.body)
  res.status(200).json({ image })
}

module.exports = { getAllImages, addImage }
