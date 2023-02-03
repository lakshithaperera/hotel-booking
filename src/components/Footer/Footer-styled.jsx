import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100vw;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const FooterTitleText = styled.h3`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 500;
  margin-top: 0;
`;
export const FooterText = styled.h3`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 400;
  margin-top: 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  .icon {
    width: 20px;
    height: 20px;
  }
  :hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const FooterTextSmall = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 400;
  margin-top: 0;
  font-size: 12px;
`;
export const FooterTop = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  @media (max-width: ${({ theme }) => theme.largeTab}) {
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {

  }
`;
export const FooterTopLeft = styled.div`
  flex: 3;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5rem;

  @media (max-width: ${({ theme }) => theme.largeTab}) {
    gap: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    
  }

  > .footer-left-top {
    display: flex;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.largeTab}) {
    gap: 3rem;
  }
    > .contact {
      display: flex;
      justify-content: space-between;
      > .tel {
        line-height: 10px;
        > .text {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          @media (max-width: ${({ theme }) => theme.mobile}) {
          grid-template-columns: 1fr;
  }
        }
      }
      > .email {
        line-height: 10px;
      }
    }
    > .social-media {
      line-height: 10px;
      display: flex;
      flex-direction: column;
      text-align: right;
      .icons {
        display: flex;
        margin-left: 4rem;
        gap: 1rem;
        .icon {
          width: 18px;
          height: 18px;
          color: ${({ theme }) => theme.colors.primaryColor};
          cursor: pointer;
          transition: 0.4s;
          :hover {
            color: ${({ theme }) => theme.colors.primaryVarient};
          }
        }
      }
    }
  }

  > .footer-left-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.largeTab}) {
    width: 80vw;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
   flex-direction: column;
  }
    > div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      @media (max-width: ${({ theme }) => theme.largeTab}) {
        gap: 1rem;
      }
      @media (max-width: ${({ theme }) => theme.tab}) {
      }
      @media (max-width: ${({ theme }) => theme.mobile}) {
       
      }
    }
  }
`;
export const FooterTopRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-left: 1px solid #bdb7c7;
  padding-left: 3rem;
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.largeTab}) {
    border: none;
    justify-content: space-between;
    width: 80vw;
    align-items: flex-start;
    padding-left: 0;
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    
  }
  > .footer-right-top {
    > .subscribe-area {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @media (max-width: ${({ theme }) => theme.largeTab}) {
      align-items: center;
      width: 80vw;
  }
      > .input-area {
        padding: 0.3rem;
        width: 30vw;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        background: ${({ theme }) => theme.colors.whiteColor};
        @media (max-width: ${({ theme }) => theme.largeTab}) {
      align-items: center;
      width: 80vw;
  }
        > input {
          padding: 0.5rem;
          border: none;
          outline: none;
        }
        > button {
          background: ${({ theme }) => theme.colors.primaryColor};
          color: ${({ theme }) => theme.colors.whiteColor};
          border: none;
          padding: 1rem 2rem;
          font-weight: 500;
          transition: 0.4s;
          :hover {
            background: ${({ theme }) => theme.colors.primaryVarient};
          }
        }
      }
    }
  }
  > .footer-link {
    transition: 0.4s;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.primaryVarient};
    }
  }
  .footer-right-bottom {
    display: flex;
    width: 100%;
    text-align: left;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: ${({ theme }) => theme.largeTab}) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 3rem;
  }
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const FooterBottom = styled.div`
  width: 80%;
  margin-top: 1rem;
  border-top: 1px solid #bdb7c7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .footer-link {
    transition: 0.4s;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.primaryVarient};
    }
  }
`;
export const FooterBottomLeft = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
`;
export const FooterBottomRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  > img {
    width: 145px;
    height: 30px;
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;
