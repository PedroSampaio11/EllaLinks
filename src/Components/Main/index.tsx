import { BannerSection } from "../Banner";
import { LinksSection } from "../Links";
// import { ProductsSection } from "../Products";
// import { ServicesSection } from "../Services";
import {
  Design,
  MainContainer,
  PrincipalContainer,
  Sub,
  Title,
  TitleContainer,
} from "./styles";

export const Main: React.FC = () => {
  return (
    <MainContainer>
      <PrincipalContainer>
        <TitleContainer>
          <Title>Bem-vinda à Ella by essence</Title>
          <Sub>
             Brilho, Cuidado e Essência nos
            <strong> links abaixo</strong>
          </Sub>
        </TitleContainer>

        <Design src="/images/design12.png" />
      </PrincipalContainer>
      <LinksSection />
      {/* <ServicesSection />
      <ProductsSection /> */}
      <BannerSection/>
    </MainContainer>
  );
};
