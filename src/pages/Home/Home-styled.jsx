import styled from "styled-components";

export const HomeContainer = styled.section`
  height: 92vh;
  overflow: hidden;
  width: 100%;
  background-image: url(${(props) => props.imgUrl}),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Jost", sans-serif;

  @media (max-width: ${({ theme }) => theme.largeTab}) {
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 100vh;
  }
  &:after {
    content: "";
    height: 92vh;
    width: 100%;
    position: absolute;
    background: rgba(27, 1, 49, 0.4);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 100vh;
    }
  }
  > .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    width: 85%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 95%;
    }
  }
`;

export const HeaderTextField = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 50px;
    margin-top: 4rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.whiteColor};
    margin-bottom: 0.2rem;
    text-shadow: 2px 5px 3px rgba(0, 0, 0, 0.1),
      0px -4px 10px rgba(255, 255, 255, 0.2);
    @media (max-width: ${({ theme }) => theme.largeTab}) {
    }
    @media (max-width: ${({ theme }) => theme.tab}) {
      font-size: 30px;
      margin:0;
      padding: 0;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
  }
  p {
    color: ${({ theme }) => theme.colors.darkWhiteColor};
    font-weight: 500;
    letter-spacing: 0.5px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 14px;
    }
  }
`;

export const TopHotels = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
  > .wrapper {
    width: 80%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 95%;
    }
  }

  > p {
    color: ${({ theme }) => theme.colors.bodyTextColor};
    margin-bottom: 3rem;
  }
`;
export const SubHeading = styled.h3`
  font-size: 30px;
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryColor};
  @media (max-width: ${({ theme }) => theme.mobile}) {
           font-size: 26px;
          }
`;
export const BodyText = styled.p`
  color: ${({ theme }) => theme.colors.bodyTextColor};
  margin-bottom: 3rem;
  line-height: 1.7rem;
  margin-top: 0.5rem;
  font-size: 15px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
           font-size: 14px;
          }
`;

export const BodySubText = styled.p`
  color: ${({ theme }) => theme.colors.bodyTextColor};
  font-size: 14px;
`;

export const TopHotelcards = styled.div``;
export const TopHotelcard = styled.div`
  background-size: cover;
  overflow: hidden;
  > img {
    width: 95%;
  }
`;
export const SliderArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
  margin-top: 3rem;
  gap: 1rem;

  > .dot {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.primaryVarient};
  }
  > .arrowIcon {
    height: 25px;
    width: 25px;
    color: ${({ theme }) => theme.colors.bodyTextColor};
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      scale: 1.3;
    }
  }
`;

export const TourisDestinations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .wrapper {
    width: 80%;
    margin-top: 4rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 95%;
    }
  }
`;
export const BodyHeading = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-transform: capitalize;
  transition: 0.4s;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.mobile}) {
           font-size: 17px;
          }
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryVarient};
  }
`;
export const Destinations = styled.div`
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.largeTab}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 1rem;
  }
  > .col {
    position: relative;
    display: flex;
    > .img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      overflow: hidden;
      @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 70px;
        height: 70px;
      }
    }
    > .text {
      text-align: left;
      padding-left: 1rem;
      
      >.d-title{
        @media (max-width: ${({ theme }) => theme.mobile}) {
          font-size: 15px;
          }
      }
      >.d-text{
        @media (max-width: ${({ theme }) => theme.mobile}) {
          font-size: 13px;
          }
      }
    }
  }

  > .viev-button {
    width: max-content;
  }
`;
export const DistinationImg = styled.img`
  background-size: cover;
  width: 100px;
  height: 100px;
  z-index: 1;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70px;
    height: 70px;
  }
  transition: 0.4s;
  &:hover {
    scale: 1.2;
  }
`;

export const HotelInSriLanka = styled.div`
  margin-top: 5rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Hotels = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 95%;
    }
`;
export const HotelsImgs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.largeTab}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
 
          }
        
`;

export const HotelsImg = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 5px;

 
`;
export const HotelsImgTextField = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 5px;
  background: linear-gradient(
    to bottom,
    rgba(1, 3, 85, 0.332),
    rgba(9, 1, 117, 0.263)
  );
  position: absolute;
  bottom: 0;
  transition: 0.4s;
  &:hover {
    .view-btn {
      display: block;
    }
  }

  > .view-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 170px;
    display: none;
    animation: fadeVisibility 0.5s;
    transition: 0.4s;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    &:hover {
      background: ${({ theme }) => theme.colors.primaryVarient};
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
`;
export const HotelsImgContainer = styled.div`
  overflow: hidden;
  width: 250px;
  height: 270px;
  border-radius: 5px;
  position: relative;
`;

export const HotelsImgText = styled.div`
  width: 250px;
  height: 60px;
  border-radius: 0 0 5px 5px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: absolute;
  bottom: 0;
  padding-top: 5px;
  > h4 {
    margin: 0;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
  > p {
    margin: 0;
    padding: 0;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;

export const TravelArticles = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
`;
export const TravelArticlesCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 2rem;
  align-items: flex-start;
  width: 80%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 95%;
          }
   @media (max-width: ${({ theme }) => theme.largeTab}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const TravelArticlesCard = styled.div``;
export const TravelArticlesImgContainer = styled.div`
  overflow: hidden;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  
`;
export const TravelArticlesImg = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    scale: 1.1;
  }
  
`;
export const TravelArticlesCardText = styled.div`
  text-align: left;
  width: 250px;
  margin-top: 1rem;
`;
export const TravelArticlesCardTextTitle = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 18px;
`;
