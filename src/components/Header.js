import React, { useState } from "react"
import logo from "../assets/logo.svg"
import styled from "styled-components"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import SearchIcon from "@mui/icons-material/Search"
import AddImageModal from "./AddImageModal"

function Header() {
  const [openModal, setOpenModal] = useState(false)

  const openAddImageModal = () => setOpenModal(true)

  return (
    <>
      <div className="container">
        <Wrapper>
          <div className="logo">
            <img src={logo} alt="my beautiful unsplash logo" />
            <div className="logo__text">
              <span className="text--bold">My Unsplash</span>
              <span className="text--small">Free photo collection</span>
            </div>
          </div>
          <div className="search">
            <SearchIcon />
            <TextField variant="outlined" placeholder="Search by name" />
          </div>
          <div className="addPhoto">
            <Button variant="contained" onClick={openAddImageModal}>
              Add a photo
            </Button>
          </div>
        </Wrapper>
      </div>
      <AddImageModal setOpenModal={setOpenModal} openModal={openModal} />
    </>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 4rem;

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo__text {
    display: flex;
    flex-direction: column;
  }

  .text--bold {
    font-weight: bold;
  }

  .text--small {
    font-size: 0.9rem;
  }

  .search {
    position: relative;
    margin: 0 auto 0 2rem;
  }

  .MuiSvgIcon-root {
    position: absolute;
    color: rgba(0, 0, 0, 0.23);
    margin-top: 16px;
    margin-left: 12px;
  }

  .MuiFormControl-root {
    margin-right: auto;
  }

  .MuiOutlinedInput-input {
    margin-left: 2rem;
  }
  .MuiOutlinedInput-root {
    border-radius: 0.6rem;
  }

  .MuiButton-root {
    text-transform: none;
    background-color: #62bd69;
    padding: 0.6rem 1rem;
    border-radius: 0.6rem;
  }

  .MuiButton-root:hover {
    background-color: #629a69;
  }
`

export default Header
