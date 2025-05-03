import React from "react";
import styled from "styled-components";
export const LinksSection: React.FC = () => {
  return (
    // data-aos="zoom-in"
    <Container>
      <Links>
        <Link
          onClick={() =>
            window.open(
              "https://wa.me/5511941253548?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.",
              "_blank",
              "_blank"
            )
          }
        >
          Fale <strong>Conosco</strong>
        </Link>
        <Link
          onClick={() =>
            window.open("https://www.instagram.com/ellaoficiall_", "_blank")
          }
        >
          Catálogo de <strong>Produtos</strong>
        </Link>
        <Link
          onClick={() =>
            window.open(
              "https://wa.me/5511941253548?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20pratas%20disponíveis%20para%20compra!",
              "_blank",
              "_blank"
            )
          }
        >
          Saiba <strong>Mais</strong>
        </Link>
      </Links>
      <Image src="/images/flower.png" />
    </Container>
  );
};
const Container = styled.section`
  padding: 4.4rem 0 2rem 0;
  height: auto;
  width: 100%;
  position: relative;
  font-family: "Onest";
  @media screen and (max-width: 1024px) {
    padding: 2rem 0;
  }
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
  @media screen and (max-width: 508px) {
    margin-top: 255px;
  }
  @media screen and (min-width: 509px) and (max-width: 1024px) {
    margin-top: 333px;
  }
`;
const Link = styled.button`
  all: unset;
  width: 70%;
  padding: 7rem 1rem;
  text-align: center;
  font-size: 4rem;
  letter-spacing: -2px;
  border-radius: 22px;
  cursor: pointer;
  border: none;
  color: #ff0084;
  box-shadow: 0 0 22px 2px rgba(220, 4, 105, 0.555);
  transition: 0.4s ease-in-out;
  font-weight: 400;
  strong {
    font-weight: 700;
  }
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 0 22px 2px rgba(220, 4, 105, 0.77);
    filter: brightness(1.1);
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 5rem 1.1rem;
    font-size: 3rem;
  }
`;

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  height: 999px;
  top: 505px;
  right: 77px;
  opacity: 0.99;
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

  @media screen and (min-width: 300px) and (max-width: 400px) {
    height: 444px;
    top: 200px;
    left: -111px;
  }

  @media screen and (min-width: 399px) and (max-width: 420px) {
    height: 555px;
    top: 200px;
    left: -177px;
  }

  @media screen and (min-width: 421px) and (max-width: 608px) {
    height: 666px;
    top: 177px;
    left: -177px;
  }
  @media screen and (min-width: 609px) and (max-width: 1024px) {
    height: 777px;
    top: 222px;
    left: -177px;
  }
`;
