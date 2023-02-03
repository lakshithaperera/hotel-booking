import styled from "styled-components";

export const ImgSliderSection = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 80%;
    margin-bottom: 4rem;

    > .slider-section {
      display: flex;
      gap: 1rem;
      margin-left: 3rem;
    }
  }
`;

export const ImgSliderCard = styled.div`
  width: 130px;
  height: 90px;
  border-radius: 5px;
  position: relative;

  > img {
    width: 130px;
    height: 90px;
    border-radius: 5px;
    z-index: 1;
    cursor: pointer;
  }
`
