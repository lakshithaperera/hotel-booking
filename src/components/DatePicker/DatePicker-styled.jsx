import styled from "styled-components";

export const DatePickerSection = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0;
    
.wrapper{
    display: flex;
    width: 80vw;
    align-items: center;
    gap: 4rem;
    justify-content: space-between;
    
    >.date-pkr{
   
    
 }
    >.check-in{
  
    border: 1px solid #ddd;
    padding: 1rem;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    >.text{
        margin: 0;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        >h4{
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-weight: 500;
            color: ${({theme}) => theme.colors.primaryColor};
        }
        >.date{
            font-size: 14px;
            padding: 0;
            margin: 0;
        }
    }
    >.btn{
        background: ${({theme}) => theme.colors.primaryVarient};
        &:hover{
            background: ${({theme}) => theme.colors.primaryColor};
        }
    }
 }
}
 
`