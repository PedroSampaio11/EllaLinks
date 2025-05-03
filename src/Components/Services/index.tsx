import React from "react";
import { Container, Prod, ProdContainer } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IMAGES } from "../constants/images";
const animation = { duration: 8100, easing: (t: number) => t };

export const ServicesSection: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 4,
      spacing: 22,
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
          perView: 1,
          spacing: 16, // Ajustado para um espaçamento menor
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
      { IMAGES.map(
        (image, index) => (
          <ProdContainer className="keen-slider__slide" key={index}>
          <Prod src={image.src} alt={image.alt} />
        </ProdContainer>
        )
      )}

     
    </Container>
  );
};
