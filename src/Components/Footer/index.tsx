import {
  FooterContainer,
  Copy,
  Copys,
  Link,
  LinkFour,
  Links,
  Icon,
} from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Links>
        <Link>
          <Icon src="/icons/whatsapp.svg"/>
        </Link>
        <Link>
          <Icon src="/icons/instagram.svg"/>
        </Link>
      </Links>
      <Copys>
        <Copy>© Ella 2025. Todos os direitos reservados.</Copy>
        <LinkFour>Desenvolvido por <strong>FourCoders</strong></LinkFour>
      </Copys>
    </FooterContainer>
  );
};
