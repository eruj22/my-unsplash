require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()
const cors = require("cors")

const connectDB = require("./database/db")

const imagesRouter = require("./routes/images")

const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// middleware
app.use(express.json())
app.use(cors())

// routes
app.get("/", (req, res) => {
  res.send("server is working")
})

app.use("/images", imagesRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on the port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
