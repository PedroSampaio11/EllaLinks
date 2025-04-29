import React from "react";
import { Container, Prod, ProdContainer } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 7000, easing: (t: number) => t };

export const ServicesSection: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2.5,
      spacing: 24, // Diminuído para evitar o "empurrão"
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 24, // Ajustado para um espaçamento menor
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1.8,
          spacing: 16, // Ajustado para um espaçamento menor
        },
      },
      "(max-width: 480px)": {
        slides: {
          perView: 1.1,
          spacing: 12, // Ajustado para um espaçamento menor
        },
      },
    },
    created(s) {
      s.moveToIdx(-1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 1, true, animation);
    },
  });

  return (
    <Container ref={sliderRef} className="keen-slider">
      <ProdContainer className="keen-slider__slide">
        <Prod src="icons/Ella.svg" />
      </ProdContainer>
      <ProdContainer className="keen-slider__slide">
        <Prod src="icons/Ella.svg" />
      </ProdContainer>
      <ProdContainer className="keen-slider__slide">
        <Prod src="icons/Ella.svg" />
      </ProdContainer>
      <ProdContainer className="keen-slider__slide">
        <Prod src="icons/Ella.svg" />
      </ProdContainer>
    </Container>
  );
};
