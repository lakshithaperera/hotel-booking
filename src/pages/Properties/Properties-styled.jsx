
import styled from "styled-components";

export const PropertiesSec = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    >.wrapper{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;
        width: 80%;
        @media (max-width: ${({ theme }) => theme.mobile}) {
     width: 95%;
    }
    @media (max-width: ${({ theme }) => theme.largeTab}) {
     align-items: center;
     justify-content: center;
     flex-direction: column;
     gap: 2;
     width: 80%;
    }
    
        >.side-bar{
            flex: 1;
            display: flex;
            margin-top: 10rem;
            flex-direction: column;
            @media (max-width: ${({ theme }) => theme.largeTab}) {
            width: 95%;
         
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
            margin-top: 6rem;
         
    }
        }
       >.property-sec{
        display: flex;
        flex:3;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        margin-top: 10rem;
        margin-bottom: 4rem;
        @media (max-width: ${({ theme }) => theme.largeTab}) {
        margin-top: 4rem;
        width: 95%;
    }
        >div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
       }
       
    }
`
export const Propertie = styled.div`
    width: 100%;
    display: flex;
    border-radius: 5px;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    background: ${({theme}) => theme.colors.PrimaryLiteColor};

    @media (max-width: ${({ theme }) => theme.tab}) {
      flex-direction: column;
    }
`

export const PropertieLeft = styled.div`
    flex: 1;
    border-radius: 5px;
`


export const PropertieRight = styled.div`
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    >.top{
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        >h4{
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-weight: 600;
            color: ${({theme}) => theme.colors.primaryColor};
        }
        
    }
    >p{
            font-size: 14px;
            color: ${({theme}) => theme.colors.lightdarkColor};
            padding: 0;

        }
        >h3{
            color: ${({theme}) => theme.colors.primaryColor};
            font-size: 18px;
        }
        >.book-btn{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            font-weight: 500;
            background: ${({theme}) => theme.colors.primaryVarient};
            &:hover{
                background: ${({theme}) => theme.colors.primaryColor};
            }
            >.book-icon{
                margin-left: 1rem;
                width: 20px;
                height: 20px;
            }
        }
`

export const SideBar = styled.div`
 
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    background: ${({theme}) => theme.colors.PrimaryLiteColor};
    padding: 1rem;
    gap: 1rem;
    border-radius: 3px;
    @media (max-width: ${({ theme }) => theme.largeTab}) {
     
    }
    .input-area{
        padding: 1rem;
        background: ${({theme}) => theme.colors.whiteColor};
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        width: 87%;

        >input{
            padding: 0.5rem;
            border: none;
            outline: none;
        }
        >.icon{
            width: 25px;
            height: 25px;
            color: ${({theme}) => theme.colors.primaryColor};
        }
    }
    >h4{
            margin: 0;
            padding: 0;
            font-size: 18px;
            font-weight: 500;
            color: ${({theme}) => theme.colors.primaryColor};
        }
        >.input-field{
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            align-items: flex-start;
            background: ${({theme}) => theme.colors.whiteColor};
            padding: 1rem;
            gap: 0.5rem;
            width: 87%;
            position: relative;
            text-align: left;
            
            
            >label{
                width: 100%;
                color: ${({theme}) => theme.colors.primaryColor};
                font-weight: 500;
            }
            >.text{
                color: ${({theme}) => theme.colors.bodyTextColor};
            }
            >input{
                width: 100%;
                border: none;
                outline: none;
            }
        }
        .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            font-weight: 600;
            width: 100%;
            background: ${({theme}) => theme.colors.primaryVarient};
            &:hover{
            background: ${({theme}) => theme.colors.primaryColor};
           }
           @media (max-width: ${({ theme }) => theme.largeTab}) {
           width: 91%;
    }
           .icon{
            color: ${({theme}) => theme.colors.whiteColor};
            width: 25px;
            height: 25px;
           }
        }
`