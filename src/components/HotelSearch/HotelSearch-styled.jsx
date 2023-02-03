import styled from "styled-components";

export const HotelTour = styled.div`
  z-index: 2;
  width: 82%;
  margin-top: 1rem;

  > .top {
    > .hotel-box {
    }
    display: flex;

    > h3 {
      padding: 4rem 0;
    }
  }

  > .bottom {
    > .input-field {
      animation: fadeVisibility 0.5s;
      transition: 0.4s;
      background: #9797ff75;
      display: flex;
      justify-content: space-between;
      > .right,
      .left,
      .middle {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: left;
        padding: 2rem;
        color: ${({ theme }) => theme.colors.whiteColor};
        @media (max-width: ${({ theme }) => theme.largeTab}) {
          gap: 0.5rem;
        }
        @media (max-width: ${({ theme }) => theme.tab}) {
        }
        @media (max-width: ${({ theme }) => theme.mobile}) {
        }
        > input {
          padding: 0.7rem 0.5rem;
          border: none;
          outline: none;
        }
      }
      > .left {
        flex: 1;
        border-radius: 0 0 0 4px;
      }
      > .middle {
        flex: 1;
      }
      > .right {
        flex: 1;
        border-radius: 0 0 4px 0;
        display: flex;
        align-items: flex-end;
        > button {
          width: 100%;
          height: 100%;
          border: none;
          cursor: pointer;
          background: ${({ theme }) => theme.colors.primaryColor};
          color: ${({ theme }) => theme.colors.whiteColor};
          z-index: 2;
        }
      }
      @media (max-width: ${({ theme }) => theme.largeTab}) {
        font-size: 13px !important;
      }
      @media (max-width: ${({ theme }) => theme.tab}) {
      }
      @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        justify-content: center;
      }
    }
    .tour-input {
      display: none;
    }

    border-radius: 0 0 5px 5px;
  }
`;
export const HotelTopBoxs = styled.div`
  flex: 1;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  animation: fadeVisibility 0.5s;
    transition: 0.4s;
  > h3 {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-weight: 300;
    font-size: 16px;
    font-weight: 600;
  }
  > .icon {
    color: ${({ theme }) => theme.colors.whiteColor};
    height: 30px;
    width: 25px;
  }
`;
