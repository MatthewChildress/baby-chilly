import Link from 'next/link';
import { LogoContainer } from './Logo.styled';

export interface ILogo {
  sampleTextProp?: string;
}

const Logo: React.FC<ILogo> = ({ sampleTextProp }) => {
  return (
    <LogoContainer>
      <Link href="/">
        <a>
          <h1>Placeholder</h1>
        </a>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
