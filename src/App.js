import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Images from "./components/Images"
import axios from "axios"

function App() {
  const [getImages, setGetImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [formChange, setFormChange] = useState(false)
  const [searchField, setSearchField] = useState("")
  const url = "http://localhost:5000/images"

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setGetImages(resp.data.images)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [formChange])

  const filteredImages = getImages.filter((image) => {
    return image.description.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <>
      <Header
        formChange={formChange}
        setFormChange={setFormChange}
        searchField={searchField}
        setSearchField={setSearchField}
      />
      <Images isLoading={isLoading} getImages={filteredImages} />
    </>
  )
}

export default App
