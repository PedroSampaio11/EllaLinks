import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0 .4rem 0;
  margin-top: 11rem;
  border-radius: 14px 14px 0 0;
  background-color: #DC0469;
  color: #FFD4C7;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 450px) {
    height: auto;
    margin-top: 4rem;
  }
  @media screen and (max-width: 600px) {
    height: auto;
    margin-top: 6rem;
  }
`;
export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: .5rem;
  padding: .4rem;
`;
export const Link = styled.a`
  
`;
export const Copys = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .4rem;
  padding: .4rem;
`;
export const Copy = styled.p`
  margin: 0;
  font-size: 1.55rem;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;
export const LinkFour = styled.a`
  margin: 0;
  font-size: 1.44rem;
  font-weight: 500;
  transition: all .3s ease;
  &:hover{
    filter: brightness(1.1);
    transform: translateY(2px);
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.33rem;
  }
`;
export const Icon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  object-fit: cover;
  margin: 0;
  cursor: pointer;
  transition: all .3s ease;
  &:hover{
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
  @media screen and (max-width: 500px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;