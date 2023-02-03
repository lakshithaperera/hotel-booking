import styled from "styled-components";

export const ExploreSec = styled.div`
  width: 100vw;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 80%;
  text-align: center;
  justify-content: center;
  margin-top: 10rem;
`;
export const ExploreMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .Explore-menu {
    display: flex;
    user-select: none;
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    list-style: none;

    @media (max-width: ${({ theme }) => theme.largeTab}) {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      row-gap: 2rem;
    }
    @media (max-width: ${({ theme }) => theme.tab}) {
      grid-template-columns: repeat(5, 1fr);
      row-gap: 2rem;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      grid-template-columns: repeat(4, 1fr);
      row-gap: 2rem;
    }

    > li {
      
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: 14px;
        font-weight: 500;
        padding: 1rem;
        background: #f5f5f5;
        border-radius: 5px;
        transition: 0.4s;
        @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 11px;
        padding: 0.3rem;
    }

    @media (max-width: ${({ theme }) => theme.tab}) {
        font-size: 12;
        padding: 0.7rem 0.4rem;
    }
        &:hover {
          color: ${({ theme }) => theme.colors.primaryVarient};
        }

    }
  }
`;

export const ExploreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-sizing: border-box;
    margin-top: 4rem;
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.largeTab}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.tab}) {
      grid-template-columns: 1fr;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      grid-template-columns: 1fr;
    }
  }
`;
export const ExploreImgContainer = styled.div`
  width: 340px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  .title {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 340px;
    height: 70px;
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 400;
    background: rgba(3, 1, 65, 0.2);
    transition: 0.4s;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
      0px -4px 10px rgba(255, 255, 255, 0.3);
    border-top: 250px solid rgba(0, 0, 0, 0);
    color: ${({ theme }) => theme.colors.whiteColor};

    &:hover {
      height: 250px;
      background: rgba(0, 0, 0, 0.5);
      text-shadow: none;
    }
  }
`;
export const ExploreImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 340px;
  height: 250px;
  border-radius: 10px;
  transition: 0.4s;
  cursor: pointer;
`;
