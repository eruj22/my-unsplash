import React, { useState } from "react"
import ModalUnstyled from "@mui/core/ModalUnstyled"
import { Box } from "@mui/system"
import styled from "styled-components"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import axios from "axios"

function AddImageModal({ setOpenModal, openModal }) {
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const postImages = "http://localhost:5000/images"

  const formSubmit = (e) => {
    e.preventDefault()

    if (imageUrl === "" || description === "") {
      return
    }

    axios
      .post(postImages, {
        image: imageUrl,
        description,
      })
      .catch((err) => console.log(err))

    setDescription("")
    setImageUrl("")
    setOpenModal(false)
  }

  const closeAddImageModal = () => setOpenModal(false)

  return (
    <StyledModal
      aria-labelledby="add a new photo"
      aria-describedby="modal add a new photo"
      open={openModal}
      onClose={closeAddImageModal}
      BackdropComponent={Backdrop}
    >
      <Box sx={style}>
        <h2>Add a new photo</h2>
        <FormContainer>
          <label htmlFor="description">Label</label>
          <TextField
            variant="outlined"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="photoUrl">Photo URL</label>
          <TextField
            variant="outlined"
            id="photoUrl"
            name="image"
            placeholder="Photo URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <div className="form__buttons">
            <Button
              variant="text"
              className="cancelBtn"
              onClick={closeAddImageModal}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className="submitBtn"
              type="submit"
              onClick={formSubmit}
            >
              Submit
            </Button>
          </div>
        </FormContainer>
      </Box>
    </StyledModal>
  )
}

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`

const style = {
  width: "70%",
  maxWidth: "600px",
  bgcolor: "#fff",
  borderRadius: ".6rem",
  p: 4,
  px: 4,
  pb: 4,
}

const FormContainer = styled.form`
  .MuiFormControl-root {
    width: 100%;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  label {
    display: block;
    margin-top: 1rem;
  }

  .MuiButton-root {
    text-transform: none;
    padding: 0.6rem 1rem;
    border-radius: 0.6rem;
  }

  .submitBtn {
    background-color: #62bd69;
    margin-left: 0.5rem;
  }

  .submitBtn:hover {
    background-color: #629a69;
  }

  .cancelBtn {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.5);
  }

  .cancelBtn:hover {
    background-color: transparent;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.5);
  }

  .form__buttons {
    margin-top: 1rem;
    float: right;
  }
`

export default AddImageModal
