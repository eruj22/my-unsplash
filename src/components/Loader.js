import React from "react"
import styled from "styled-components"

function Loader() {
  return (
    <Wrapper>
      <div className="spinner"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;

  .spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid;
    border-color: lightblue;
    border-right-color: orange;
    animation: s2 1s infinite linear;
  }

  @keyframes s2 {
    to {
      transform: rotate(1turn);
    }
  }
`

export default Loader
