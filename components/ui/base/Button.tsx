import { ButtonContainer } from './Button.styled';

export interface IButton {
  sampleTextProp: string;
}

const Button: React.FC<IButton> = ({ sampleTextProp }) => {
  return <ButtonContainer>{sampleTextProp}</ButtonContainer>;
};

export default Button;
