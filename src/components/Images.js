import React from "react"
import styled from "styled-components"

import Loader from "./Loader"

function Images({ isLoading, getImages }) {
  if (isLoading) {
    return <Loader />
  }

  const reversedImages = [...getImages].reverse()

  // get all the images into 3 arrays and render them into 3 columns
  const firstPhotoColumn = reversedImages.filter((_, index) => index % 3 === 0)
  const secondPhotoColumn = reversedImages.filter((_, index) => index % 3 === 1)
  const thirdPhotoColumn = reversedImages.filter(
    (_, index) => (index + 1) % 3 === 0
  )

  return (
    <div className="container">
      <Wrapper>
        <div className="photosColumn">
          {firstPhotoColumn.map((img) => {
            const { description, _id, image } = img
            return (
              <article className="photosColumn__container photo--overlay">
                <img
                  className="photosColumn__image"
                  key={_id}
                  src={image}
                  alt={description}
                />
                <div className="photosColumn__description">{description}</div>
              </article>
            )
          })}
        </div>
        <div className="photosColumn">
          {secondPhotoColumn.map((img) => {
            const { description, _id, image } = img
            return (
              <article className="photosColumn__container photo--overlay">
                <img
                  className="photosColumn__image"
                  key={_id}
                  src={image}
                  alt={description}
                />
                <div className="photosColumn__description">{description}</div>
              </article>
            )
          })}
        </div>
        <div className="photosColumn">
          {thirdPhotoColumn.map((img) => {
            const { description, _id, image } = img
            return (
              <article className="photosColumn__container photo--overlay">
                <img
                  className="photosColumn__image"
                  key={_id}
                  src={image}
                  alt={description}
                />
                <div className="photosColumn__description">{description}</div>
              </article>
            )
          })}
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

  .photosColumn {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .photosColumn__image {
    width: 100%;
    border-radius: 0.6rem;
    min-height: 200px;
    margin-bottom: -0.3rem;
  }

  .photosColumn__image::before {
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .photosColumn__container {
    position: relative;
  }

  .photosColumn__container:hover .photosColumn__description {
    opacity: 1;
    transition: all 0.3s ease-out;
  }

  .photo--overlay:hover::before {
    transition: all 2s ease-out;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80px;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0)
    );
  }

  .photosColumn__description {
    opacity: 0;
    position: absolute;
    left: 0.7rem;
    right: 0.7rem;
    bottom: 0.6rem;
    color: #fff;
  }
`

export default Images
