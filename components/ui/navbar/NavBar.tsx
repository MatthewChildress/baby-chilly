import Links from '../links/Links';
import { NavBarContainer } from './NavBar.styled';

export interface INavBar {
  sampleTextProp?: string;
}

const NavBar: React.FC<INavBar> = ({ sampleTextProp }) => {
  return (
    <NavBarContainer>
      {sampleTextProp}
      <Links />
    </NavBarContainer>
  );
};

export default NavBar;
