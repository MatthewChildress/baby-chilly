import { LogoContainer } from './Logo.styled';

export interface ILogo {
  sampleTextProp?: string;
}

const Logo: React.FC<ILogo> = ({ sampleTextProp }) => {
  return <LogoContainer>{sampleTextProp}</LogoContainer>;
};

export default Logo;
