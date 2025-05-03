import { useEffect, useState } from "react";
import styled from "styled-components";

export const BannerSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize(); // inicial
    window.addEventListener("resize", handleResize); // atualiza ao redimensionar

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <BannerImage
        src={isMobile ? "/images/bannerResponsive.png" : "/images/banner.png"}
        alt="Banner"
      />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const BannerImage = styled.img`
  width: 100%;
  margin-top: 7rem;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 0 22px 2px rgba(220, 4, 105, 0.555);

  @media screen and (max-width: 600px) {
   margin-top: 2rem;
  }
`;
