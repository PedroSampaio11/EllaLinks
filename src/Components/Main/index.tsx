import { LinksSection } from "../Links";
import { ProductsSection } from "../Products";
import { ServicesSection } from "../Services";
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
            Elegância, cuidado e essência nos
            <strong> links abaixo</strong>
          </Sub>
        </TitleContainer>

        <Design src="/images/design.png" />
      </PrincipalContainer>
      <LinksSection />
      <ProductsSection />
      <ServicesSection />
    </MainContainer>
  );
};
