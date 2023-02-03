import styled from "styled-components";

export const PropertySlideShow = styled.div`
    >.slideshow {
  overflow: hidden;
  max-width: 300px;
  border-radius: 5px;
  margin: 0;
  padding: 0;

  >.slideshowSlider{
    white-space: nowrap;
    transition: ease 1000ms;
    display: flex;
    gap: 0;
    >.slide {
    display: inline-block;
    height: 250px;
    width: 300px;
    border-radius: 5px;
    >img{
    height: 250px;
    width: 300px;
    border-radius: 5px;
    }
  }
  }
  >.slideshowDots {
    text-align: center;
    position: relative;
    bottom:3rem;
    >
  .slideshowDot {
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    z-index: 2;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
    
  }
  >.slideshowDot.active{
        background: ${({theme}) => theme.colors.primaryVarient};
    }
  }
}

`