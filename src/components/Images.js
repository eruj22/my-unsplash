import React from "react"
import styled from "styled-components"
import Loader from "./Loader"
import { SRLWrapper } from "simple-react-lightbox"
import { options } from "../helpers/options"

function Images({ isLoading, getImages }) {
  if (isLoading) {
    return <Loader />
  }

  const reversedImages = [...getImages].reverse()

  return (
    <>
      <div className="container">
        <SRLWrapper options={options}>
          <Wrapper>
            {reversedImages.map((img) => {
              const { description, _id, image } = img
              return (
                <article className="photos__container photo--overlay" key={_id}>
                  <img
                    className="photos__image"
                    src={image}
                    alt={description}
                  />
                  <div className="photos__description">{description}</div>
                </article>
              )
            })}
          </Wrapper>
        </SRLWrapper>
      </div>
    </>
  )
}

const Wrapper = styled.section`
  columns: 3;

  @media (max-width: 992px) {
    columns: 2;
  }

  @media (max-width: 750px) {
    columns: 1;
  }

  .photos__container {
    cursor: pointer;
    position: relative;
    display: inline-block;
    margin-bottom: 1rem;
  }

  .photos__image {
    width: 100%;
    border-radius: 0.6rem;
    min-height: 200px;
    margin-bottom: -0.3rem;
  }

  .photos__image::before {
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .photos__container:hover .photos__description {
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

  .photos__description {
    opacity: 0;
    position: absolute;
    left: 0.7rem;
    right: 0.7rem;
    bottom: 0.6rem;
    color: #fff;
  }

  @media (max-width: 750px) {
    text-align: center;
    .photos__image {
      max-width: 500px;
    }
  }
`

export default Images
