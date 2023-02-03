import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100vw;
  height: 90px;
  background: ${({ theme }) => theme.colors.whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 3;
          @media (max-width: ${({ theme }) => theme.tab}) {
            height: 70px;
          }

          @media (max-width: ${({ theme }) => theme.mobile}) {
            height: 60px;
          }
  > .wrapper {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .nav-left {
      display: flex;
      align-items: center;
      gap: 1rem;

      > img {
        width: 140px;
        height: 30px;
      }
      > .nav-items {
       
        > .nav-close {
          display: none;
          @media (max-width: ${({ theme }) => theme.largeTab}) {
            display: block;
            width: 30px;
            height: 30px;
            color: ${({ theme }) => theme.colors.primaryVarient};
            cursor: pointer;
            position: absolute;
            right: 1rem;
            top: 1rem;
            transition: 0.4s;
            &:hover{
              scale: 1.2;
              
            }
          }
        }
        @media (max-width: ${({ theme }) => theme.largeTab}) {
          position: absolute;
          top: 0;
          right: 0;
          display: none;
          flex-direction: column;
          width: 60vw;
          height: 60vh;
          padding: 4rem 0;

          animation: fadeVisibility 0.5s;
          align-items: center;
          justify-content: center;
          background: ${({ theme }) => theme.colors.whiteColor};
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          border-radius: 5px;

          @media (max-width: ${({ theme }) => theme.largeTab}) {
            flex-direction: column;
          }
          @media (max-width: ${({ theme }) => theme.tab}) {

          }
          @media (max-width: ${({ theme }) => theme.mobile}) {
          }
        }
        > ul {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          list-style: none;

          @media (max-width: ${({ theme }) => theme.largeTab}) {
            flex-direction: column;
          }
          @media (max-width: ${({ theme }) => theme.tab}) {
          }
          @media (max-width: ${({ theme }) => theme.mobile}) {
          }

          li {
            a {
              text-decoration: none;
              color: ${({ theme }) => theme.colors.primaryColor};
              font-weight: 600;
              font-size: 15px;
              transition: 0.5s;
              @media (max-width: ${({ theme }) => theme.largeTab}) {
                color: ${({ theme }) => theme.colors.primaryVarient};
                
              &:hover {
                color: ${({ theme }) => theme.colors.primaryColor};
              }
          }

              &:hover {
                color: ${({ theme }) => theme.colors.primaryVarient};
              }
            }
          }
        }
      }
    }

    > .nav-right {
      display: flex;
      align-items: center;
      gap: 2rem;
      > .nav-btn {
        display: flex;
        gap: 2rem;
        @media (max-width: ${({ theme }) => theme.tab}) {
          display: none;
        }
      }
    }
  }
`;
export const ColorButton = styled.button`
  padding: 1rem 2rem;
  transition: 0.4s;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  border: none;
  @media (max-width: ${({ theme }) => theme.largeTab}) {
    padding: 1rem 1.5rem;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primaryVarient};
  }
`;
export const BorderButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 500;
  transition: 0.4s;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.whiteColor};
  @media (max-width: ${({ theme }) => theme.largeTab}) {
    padding: 1rem 1.5rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryVarient};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  gap: 1rem;
  display: none;
  @media (max-width: ${({ theme }) => theme.largeTab}) {
    display: flex;
  }
  > .icon {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.primaryVarient};
    cursor: pointer;
  }
.profile-section{
  position: absolute;
  height: 60vh;
  display: none;
  z-index: 3;
  padding: 2rem;
  animation: fadeVisibility 0.5s;
  background: ${({ theme }) => theme.colors.whiteColor};
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          border-radius: 5px;
  top: 0;
   right: 0;
   >img{
    width: 60px;
    height: 60px;

   }
   >.profile-close{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
      scale: 1.2;
    }
   }

}
  
`;
