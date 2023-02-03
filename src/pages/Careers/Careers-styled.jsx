import styled from "styled-components";

export const FormHeading = styled.h2`
  font-size: 28px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryColor};
`;
export const CareersSec = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  > .wrapper {
    width: 70%;
    padding: 2rem;
    margin: 10rem 0;
    background: ${({theme}) => theme.colors.PrimaryLiteColor};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    > form {
      margin: 4rem 0;
      > .two-inputs {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        @media (max-width: ${({ theme }) => theme.tab}) {
               flex-direction: column;
            }

        > .label {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          > label {
            text-align: left;
            color: ${({ theme }) => theme.colors.formTextColor};
            font-family: "Roboto", sans-serif;
            text-transform: capitalize;
            font-size: 14px;
            font-weight: 500;
          }
          > input {
            padding: 1rem;
            border: none;
            outline: none;
            border-radius: 5px;
            width: 350px;
            transition: 0.4s;
            @media (max-width: ${({ theme }) => theme.largeTab}) {
              width: 300px;
            }
            @media (max-width: 970px) {
              width: 230px;
            }
            @media (max-width: ${({ theme }) => theme.mobile}) {
              width: 64vw;
            }

            @media (max-width: ${({ theme }) => theme.tab}) {
              width: 66.5vw;
            }


          
            &:focus {
              outline: 2px solid ${({ theme }) => theme.colors.primaryVarient};
            }
          }
          > select {
            padding: 1rem;
            border: none;
            outline: none;
            width: 380px;
            border-radius: 5px;
            background: ${({ theme }) => theme.colors.whiteColor};
            color: #808080;
            transition: 0.4s;
            @media (max-width: ${({ theme }) => theme.largeTab}) {
              width: 330px;
            }
            @media (max-width: 970px) {
              width: 260px;
            }
            @media (max-width: ${({ theme }) => theme.mobile}) {
              width: 64vw;
            }

            @media (max-width: ${({ theme }) => theme.tab}) {
              width: 71vw;
            }
            
            &:focus {
              outline: 2px solid ${({ theme }) => theme.colors.primaryVarient};
            }
          }
        }
      }
      > .one-inputs {
        display: flex;
        align-items: flex-start;
        > .label {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          > label {
            text-align: left;
            color: ${({ theme }) => theme.colors.formTextColor};
            font-family: "Roboto", sans-serif;
            text-transform: capitalize;
            font-size: 14px;
            font-weight: 500;
          }
          > input {
            padding: 1rem;
            border: none;
            outline: none;
            width: 67.5vw;
            border-radius: 5px;
            transition: 0.4s;
            @media (max-width: 970px) {
              width: 66.5vw;
            }
            @media (max-width: ${({ theme }) => theme.mobile}) {
              width: 64vw;
            }

            @media (max-width: ${({ theme }) => theme.tab}) {
                width: 66.5vw;
            }

            &:focus {
              outline: 2px solid ${({ theme }) => theme.colors.primaryVarient};
            }
          }
          > textarea {
            padding: 1rem;
            border: none;
            outline: none;
            width: 67.5vw;
            border-radius: 5px;
            resize: vertical;
            font-size: 14px;
            font-weight: 500;
            transition: 0.4s;
            @media (max-width: 970px) {
              width: 66.5vw;
            }
            @media (max-width: ${({ theme }) => theme.mobile}) {
              width: 64vw;
            }

            @media (max-width: ${({ theme }) => theme.tab}) {
                width: 66.5vw;
            }
            &:focus {
              outline: 2px solid ${({ theme }) => theme.colors.primaryVarient};
            }
          }
        }
      }
      > .inputs {
        margin-bottom: 2rem;
      }
    }
  }
`;
