import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;  position: relative;
  
`;
export const PrincipalContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 60%;

`;

export const Title = styled.h1`
  margin: 0;
  padding: 1rem 7rem 2rem 0;
  line-height: 1;
  font-weight: 700;
  font-size: 7.7rem;
`;
export const Sub = styled.p`
  margin: 0;
  font-size: 3.3rem;
  width: 70%;
  font-weight: 400;
  strong{
    font-weight: 700;
  }
`;


export const Design = styled.img`
  height: 999px;
  width: auto;
  object-fit: cover;
  top: -44px;
  right: -22px;
  position: absolute;
  z-index: 10;
  pointer-events: none;
`;