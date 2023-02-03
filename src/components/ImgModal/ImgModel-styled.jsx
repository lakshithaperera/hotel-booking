import styled from "styled-components";

export const ImgModelSection = styled.div`
     >.btn{
                font-weight: 600;
                background: ${({theme}) => theme.colors.whiteColor};
                color: ${({theme}) => theme.colors.primaryColor};
                &:hover{
                    background: ${({theme}) => theme.colors.primaryVarient};
                    color: ${({theme}) => theme.colors.whiteColor};
                }
            }
`

export const ImgGalary = styled.div`
    width: 60vw;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 4rem;
    ul{
        position: absolute;
        bottom: 5rem;
        list-style: none;
        display: flex;
        gap: 1rem;
        li{
            a{
                background: rgba(0, 0, 0, 0.4);
                padding: 5px 10px;
                font-size: 13px;
                font-weight: 600;
                text-decoration: none;
                color: ${({theme}) => theme.colors.whiteColor};
            }
        }
    }
   
`