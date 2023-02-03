import styled from "styled-components";

export const RoomBookSec = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const RoomBookWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  padding: 2rem;
`;
export const RoomTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primaryColor};
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 0;
`;
export const RoomHeader = styled.div`
  width: 97%;
  margin: 0 1rem;
  padding: 1rem;
  background: #13357b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .fst {
    margin-left: 3rem;
  }
  > .scnd {
    margin-right: 3rem;
  }
  > h4 {
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0;
    padding: 0;
  }
`;
export const RoomContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4rem;
  padding: 0;
  margin: 0;

  > .img {
    img {
      width: 100%;
      position: relative;
    }
    > .text {
      width: 100%;
      text-align: left;
      > .txt {
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export const MealType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  

  > .meal-type {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
    > .input-area {
      .toggler-wrapper.style-1 input[type="checkbox"]:checked+.toggler-slider .toggler-knob {
  left: calc(100% - 19px - 3px);
}

.toggler-wrapper.style-1 .toggler-knob {
  width: calc(25px - 6px);
  height: calc(25px - 6px);
  border-radius: 50%;
  left: 3px;
  top: 3px;
  background-color: #fff;
}
      label {
        color: ${({ theme }) => theme.colors.bodyTextColor};
        font-size: 14px;
        font-weight: 500;
      }
      input {
        cursor: pointer;
      }
    }
    > .icons {
      display: flex;

      > .icon {
        color: #697488;
        width: 25px;
        height: 25px;
      }
    }
  }
`;
export const NoOfRooms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  .no-of-room {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    .input-area {
      display: flex;
      gap: 5px;
      align-items: center;

      .icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
      input {
        width: 20px;
      }
    }
    .check-area {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const RoomAmount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Policies = styled.div`
 
  display: flex;
  flex-direction: column;
  gap: 10rem;

  .policies{
    text-align: left;

    .text {
    margin: 0;
    padding: 0;
  }
  }
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: column;

  .price{
    display: flex;
  align-items: center;
  gap: 5px;
  flex-direction: column;
    h3,
  h4 {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  .price-box {
    padding: 1.5rem;
    border: 1px solid #ddd;
  }
  .btn {
    background: ${({ theme }) => theme.primaryVarient};
    padding: 1rem 3rem;
    &:hover {
      background: ${({ theme }) => theme.primaryColor};
    }
  }
  }
 
`;
