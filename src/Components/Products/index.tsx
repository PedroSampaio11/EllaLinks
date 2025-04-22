import React from "react";
import { Container, Prod, ProdContainer } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 5000, easing: (t: number) => t };

export const ProductsSection: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2.5, 
      spacing: 44, // 20px de espaço entre os slides
    },
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
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
