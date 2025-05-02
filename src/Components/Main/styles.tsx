import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;  
  position: relative;
  padding: 0;
  padding: 0 2rem;
`;
export const PrincipalContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 60%;
  @media screen and (max-width: 1024px){
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 1rem 7rem 2rem 0;
  line-height: 1;
  font-weight: 700;
  font-size: 7.7rem;
  @media screen and (max-width: 420px){
    font-size: 4.4rem;
    padding: .5rem 2rem 0 0;
  }
  @media screen and (min-width: 421px) and (max-width: 608px) {
  font-size: 4.5rem;
  padding: .5rem 2rem 0 0;
}
@media screen and (min-width: 609px) and (max-width: 1024px) {
  font-size: 5.5rem;
}
`;
export const Sub = styled.p`
  margin: 0;
  font-size: 3.3rem;
  width: 70%;
  font-weight: 400;
  strong{
    font-weight: 700;
  }
  @media screen and (max-width: 420px){
    font-size: 2.6rem;
    width: 100%;
    padding: 1rem 0;
  }
  
@media screen and (min-width: 421px) and (max-width: 608px) {
  font-size: 2.7rem;
  width: 100%;
}
@media screen and (min-width: 609px) and (max-width: 1024px) {
  font-size: 3rem;
  width: 70%;
}
`;


export const Design = styled.img`
  height: 999px;
  width: auto;
  object-fit: cover;
  top: 11px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  pointer-events: none;

  @media screen and (min-width: 300px) and (max-width: 400px) {
  height: 333px;
  top: 188px;
}

@media screen and (min-width: 401px) and (max-width: 420px) {
  height: 345px;
  top: 177px;
}

@media screen and (min-width: 421px) and (max-width: 608px) {
  height: 371px;
  top: 177px;
}
@media screen and (min-width: 609px) and (max-width: 1024px) {
  height: 500px;
  top: 144px;
}
`;