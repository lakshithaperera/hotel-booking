import styled from "styled-components";

export const SliderSection = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 80%;
    margin-bottom: 4rem;

    > .slider-section {
      display: flex;
     width: 100%;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const SliderCard = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 5px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.largeTab}) {
    width: 210px;
    height: 270px;
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 250px;
    height: 300px;
    margin-left: 1rem;
  }

  > img {
    width: 250px;
    height: 300px;
    border-radius: 5px;
    z-index: 1;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.largeTab}) {
      width: 210px;
      height: 270px;
    }
    @media (max-width: ${({ theme }) => theme.tab}) {
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 250px;
      height: 300px;
    }
  }
  > .text {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 250px;
    height: 300px;
    border-radius: 5px;
    flex-direction: column;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    background: transparent;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.largeTab}) {
      width: 210px;
      height: 270px;
    }
    @media (max-width: ${({ theme }) => theme.tab}) {
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 250px;
      height: 300px;
    }

    &:hover {
      background: rgba(4, 0, 20, 0.5) !important;
      h4,
      p,
      .btn {
        display: block;
      }
    }
    > h4 {
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size: 24px;
      margin: 0;
      padding: 0;
      font-weight: 600;
      display: none;
      transition: 0.4s;
      animation: fadeVisibility 0.5s;
    }
    > p {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin: 0;
      padding: 0;
      display: none;
      transition: 0.4s;
      animation: fadeVisibility 0.5s;
    }

    > .btn {
      transition: 0.4s !important;
      display: none;
      transition: 0.4s;
      font-weight: 600;
      animation: fadeVisibility 0.5s;
      color: ${({ theme }) => theme.colors.primaryColor};
      background: ${({ theme }) => theme.colors.whiteColor};
      &:hover {
        color: ${({ theme }) => theme.colors.whiteColor};
        background: ${({ theme }) => theme.colors.primaryVarient};
      }
    }
  }
`;
