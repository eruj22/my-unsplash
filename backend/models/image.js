const mongoose = require("mongoose")
const { Schema } = mongoose

const ImageSchema = new Schema({
  image: {
    type: String,
    required: [true, "You need to insert image"],
  },
  description: {
    type: String,
    required: [true, "Enter image description"],
  },
})

module.exports = mongoose.model("image", ImageSchema)
