import styled from "styled-components";

export const DestinationSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.colors.PrimaryLiteColor};
    position: relative;
    top: 2rem;
    > .header-sec {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;
      .left {
        flex: 1;
        text-align: left;
        padding-right: 4rem;
        > h2 {
          font-size: 30px;
          color: ${({ theme }) => theme.colors.primaryColor};
        }
        .b-text {
          line-height: 30px;
        }
      }
      .right {
        flex: 1;
        img {
          width: 100%;
          height: 250px;
          border-radius: 5px;
        }
      }
    }
  }
  .text-section {
    margin-top: 4rem;
    display: grid;
    grid-template-areas: "a b"
                          "a c"
                          ;
    align-items: flex-start;
    width: 80%;
    gap: 2rem;
    margin-bottom: 2rem;
    h2 {
      font-size: 30px;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
    > .text-feild {
      text-align: left;
    }
    > .left {
        grid-area: a;
      text-align: left;
      padding: 2rem;
      border-radius: 10px;
      background: ${({ theme }) => theme.colors.PrimaryLiteColor};
    }
    >.middle{
        grid-area: b;
    }
    > .right {
        grid-area: c;
      text-align: left;
      padding: 2rem;
      border-radius: 10px;
      background: ${({ theme }) => theme.colors.PrimaryLiteColor};
    }
  }
`;
