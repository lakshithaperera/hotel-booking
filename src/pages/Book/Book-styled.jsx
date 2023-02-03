import   styled    from "styled-components";

export const BookSection = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    >.wrapper{
        width: 80%;
        margin: 8rem 0;
    }
`
export const BookHeaderSection = styled.div`
   width: 100%;

   >.top{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            >.left{
                
                >.star{
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                >.address{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    >.icon{
                        width: 17px;
                        height: 17px;
                        color: ${({theme}) => theme.colors.bodyTextColor};
                    }
                    >.text{
                        margin: 0;
                        padding: 0;
                    }
                }
            }
            >.right{
                display: flex;
                align-items: center;
                gap: 1rem;
                >.text{
                    margin: 0;
                    padding: 0;
                }
                >.price-btn{
                    background: ${({theme}) => theme.colors.primaryVarient} ;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 1.5rem;

                    >.book-icon{
                        width: 20px;
                        height: 20px;
                        font-weight: bold;
                    }
                }
            }
        }
        >.book-bottom{
            width: 100%;
            display: grid;
            position: relative;
            grid-template-areas: 
            "a a b c"
            "a a d e";
            margin: 0;
            padding: 0;
            gap: 0.5rem;
            >.book-img{
                border-radius: 5px;
                margin: 0;
                padding: 0;
                >img{
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    margin: 0;
                    padding: 0;
                }
            }
            >.img1{
             grid-area: a;  
            }
            >.img2{
                grid-area: b;
            }
            >.img3{
                grid-area: c;
            }
            >.img4{
                grid-area: d;
            }
            >.img5{
                grid-area: e;
            }
            >.img-model{
                font-weight: 600;
                position: absolute;
                right: 1rem;
                bottom: 1rem;
            }
        }
`

export const BookPrice = styled.h4`
    color: ${({theme}) => theme.colors.primaryColor};
    font-size: 24px;
    text-transform: uppercase;
`

export const MapContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    .left{
        flex: 3;
    }
    .right{
        flex: 1;
    }
`