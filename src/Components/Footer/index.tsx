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
        <Link href="https://wa.me/5511941253548" target="_blank" rel="noopener noreferrer">
          <Icon src="/icons/whatsapp.svg" />
        </Link>
        <Link href="https://www.instagram.com/ellaoficiall_" target="_blank" rel="noopener noreferrer">
          <Icon src="/icons/instagram.svg" />
        </Link>
      </Links>
      <Copys>
        <Copy >© Ella 2025. Todos os direitos reservados.</Copy>
        <LinkFour href="https://www.fourcoders.com" target="_blank" rel="noopener noreferrer" >Desenvolvido por <strong>FourCoders</strong></LinkFour>
      </Copys>
    </FooterContainer>
  );
};
