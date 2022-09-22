import { FooterContainer } from './Footer.styled';

export interface IFooter {
  sampleTextProp?: string;
}

const Footer: React.FC<IFooter> = ({ sampleTextProp }) => {
  return <FooterContainer>{sampleTextProp}</FooterContainer>;
};

export default Footer;
