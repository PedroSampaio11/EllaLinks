import { NavbarContainer, Logo } from "./styles";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer data-aos="fade-down" data-aos-duration="500">
      <Logo src="/icons/Ella.svg"/>
    </NavbarContainer>
  );
};
