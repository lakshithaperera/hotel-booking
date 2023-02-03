import styled from "styled-components";

export const RegisterSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  &:after {
    content: "";
    height: 100vh;
    width: 100%;
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    );
  }
  .wrapper {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.7rem;
    padding: 2rem 0;
    z-index: 2;
    border-radius: 10px;
    background: #9797ff75;
    margin-top: 10rem;
    margin-bottom: 4rem;
    > form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      > input {
        padding: 0.8rem;
        border: none;
        outline: none;
        border-radius: 5px;
        transition: 0.4s;
        width: 500px;

        &:focus {
          outline: 2px solid ${({ theme }) => theme.colors.primaryVarient};
        }
      }
      .two-input {
        display: flex;
        justify-content: space-between;
        > input {
          padding: 0.8rem;
          border: none;
          outline: none;
          border-radius: 5px;
          transition: 0.4s;
        }
      }

      >.bottom {
       display: flex;
       gap: 1rem;
       align-items: center;
        >label{
          font-weight: 500;
          font-size: 14px;
          color: ${({ theme }) => theme.colors.whiteColor};
        }
      }
      > .form-g-btn {
        width: 530px;
        cursor: pointer;
        > .icon {
          width: 25px;
          height: 25px;
          background: #fff;
          padding: 8px;
          border-radius: 50%;
          transition: 0.4s;
          &:hover {
            scale: 1.1;
          }
        }
      }
    }
  }
`;

export const RegisterHeading = styled.h4`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

export const RegisterSubHeading = styled.h5`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  > h4 {
    cursor: pointer;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 600;
  }
`;
