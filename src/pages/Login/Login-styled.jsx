import styled from "styled-components";

export const LoginSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props)=>props.imgUrl});
 background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  &:after{
        content: '';
        height: 100vh;
        width: 100%;
        position: absolute;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
     }
  .wrapper {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    z-index: 2;
    border-radius: 10px;
    background: #9797ff75;
    margin-top: 10rem ;
    margin-bottom: 3rem;
    > form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      > input {
        padding: 1rem;
        border: none;
        outline: none;
        border-radius: 5px;
        transition: 0.4s;
        width: 500px;
    

        &:focus {
          outline: 2px solid ${({ theme }) => theme.colors.primaryVarient};
        }
      }
      .bottom{
        display: flex;
        width: 530px;
        justify-content: space-between;
        >.left{
            display: flex;
            gap: 2rem;
            label{
                color: ${({ theme }) => theme.colors.whiteColor};
            }
            
        }
        >.right{
           >a{
            text-decoration: none;
            color: ${({ theme }) => theme.colors.whiteColor};
           }
        }
      }
      >.form-g-btn{
        width: 530px;
        cursor: pointer;
        >.icon{
            width: 25px;
            height: 25px;
            background: #fff;
            padding: 8px;
            border-radius: 50%;
            transition: 0.4s;
          &:hover{
            scale: 1.1;
          }
        }
    }
    }
   
  }
`;

export const LoginHeading = styled.h4`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

export const LoginSubHeading = styled.h5`
 display: flex;
 gap: 1rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  >h4{
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 600;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
`;
