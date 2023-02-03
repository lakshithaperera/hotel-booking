import styled from "styled-components";


export const Dropzone = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 67.5vw;
    background: ${({theme}) => theme.colors.whiteColor};
    padding: 1rem;
    gap: 1rem;
    border-radius: 5px;
    border: 1px dashed ${({theme}) => theme.colors.bodyTextColor};
    cursor: grab;
                    &:hover{
                        
                        outline: 2px dashed ${({theme}) => theme.colors.primaryVarient};
                    }

    >p{
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: ${({theme}) => theme.colors.primaryVarient};
      margin: 0;
      padding: 0;
    }
    >button{
      font-weight: 500;
    }

`
    
export const UploadsArea = styled.div`
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 58vw;
    background: ${({theme}) => theme.colors.whiteColor};
    padding: 1rem;
    border-radius: 5px;
    border: 1px dashed ${({theme}) => theme.colors.bodyTextColor};
  >ul{
    display: flex;
    flex-direction: column;
    >li{
      font-size: 15px;
      font-weight: 600;
      color: ${({theme}) => theme.colors.primaryVarient};
    }
   
  }
  >.actions{
      display: flex;
      gap: 3rem;
    }
`







