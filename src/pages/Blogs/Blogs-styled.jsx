import styled from "styled-components";

export const BlogSection = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const BlogCards = styled.div`
    margin-top: 10rem;
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-sizing: border-box;
    gap: 3rem;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: ${({ theme }) => theme.largeTab}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-columns: 1fr;
  }
`
export const BlogCard = styled.div`
  width: 300px;
  text-align: left;
`

export const BlogCardImg = styled.div`
   overflow: hidden;
   >img{
    width: 300px;
    height: 250px;
    border-radius: 5px;
   }
`

export const BlogCardText = styled.div`
 >h2{
            color: ${({theme}) => theme.colors.primaryColor};
            font-size: 18px;
        }
    
    a{
        text-transform: uppercase;
        color: ${({theme}) => theme.colors.primaryVarient};
        align-self: left;
        text-decoration: none;
        width: 300px;
    }
`