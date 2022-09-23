import Github from '../../icons/github/Github';
import Logo from '../../ui/logo/Logo';
import { FooterContainer } from './Footer.styled';

export interface IFooter {
  sampleTextProp?: string;
}

const Footer: React.FC<IFooter> = ({ sampleTextProp }) => {
  return (
    <FooterContainer>
      <Logo />
      <div>
        <span>&copy; 2022 Ada Says So, LLC. All rights reserved.</span>
      </div>
      <Github />
    </FooterContainer>
  );
};

export default Footer;
