import React from "react"
import styled from "styled-components"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"

function Images() {
  return (
    <div className="container">
      <Wrapper>
        <div className="photosColumn">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
        <div className="photosColumn">
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className="photosColumn">
          <img src={img5} alt="" />
          <img src={img4} alt="" />
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  overflow: auto;

  img {
    width: 100%;
    border-radius: 0.6rem;
    min-height: 200px;
  }

  .photosColumn {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export default Images
