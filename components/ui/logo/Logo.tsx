import Link from 'next/link';
import { LogoContainer } from './Logo.styled';

export interface ILogo {
  sampleTextProp?: string;
}

const Logo: React.FC<ILogo> = () => {
  return (
    <LogoContainer>
      <Link href="/">
        <a>
          <h1>Baby Chilly!</h1>
        </a>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
