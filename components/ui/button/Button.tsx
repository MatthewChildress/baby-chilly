import Link from 'next/link';
import { ButtonContainer } from './Button.styled';

export interface IButton {
  sampleTextProp?: string;
}

const Button: React.FC<IButton> = () => {
  return (
    <ButtonContainer>
      <Link href="rsvp">
        <a>RSVP</a>
      </Link>
    </ButtonContainer>
  );
};

export default Button;
