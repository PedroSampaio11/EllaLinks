import React from "react";
import styled from "styled-components";
export const LinksSection: React.FC = () => {
  return (
    <Container data-aos="zoom-in">
      <Links>
        <Link>Fale Conosco</Link>
        <Link>Catálogo de Produtos</Link>
        <Link>Saiba Mais</Link>
      </Links>
      <Image src="/images/flower.png"/>
    </Container>
  );
};
const Container = styled.section`
  padding: 4.4rem 0 2rem 0;
  height: auto;
  width: 100%;
  position: relative;
  font-family: 'Onest';
`;

const Links = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  margin-top: 488px;
`;
const Link = styled.button`
  all: unset;
  width: 70%;
  padding: 7rem 1rem;
  text-align: center;
  font-size: 3.4rem;
  letter-spacing: -1px;
  border-radius: 22px;
  cursor: pointer;
  border: none;
  color: #FF0084;
  box-shadow: 0 0 22px 2px rgba(220, 4, 105, 0.555);
  transition: 0.4s ease-in-out;
  font-weight: 700;
  &:hover{
    transform: scale(1.04);
    box-shadow: 0 0 22px 2px rgba(220, 4, 105, 0.77);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  height: 999px;
  top: 447px;
  opacity: .99;
  right: -222px;
  pointer-events: none;
  animation: flower 17s ease-in-out infinite alternate;

@keyframes flower {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(80px) rotate(2deg);
  }
}
`;