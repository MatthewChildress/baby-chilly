import Logo from '../../ui/logo/Logo';
import NavBar from '../../ui/navbar/NavBar';
import { HeaderContainer } from './Header.styled';

export interface IHeader {
  sampleTextProp?: string;
}

const Header: React.FC<IHeader> = ({ sampleTextProp }) => {
  return (
    <HeaderContainer>
      <Logo />
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
