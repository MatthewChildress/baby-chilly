import { RegistryContainer } from './Registry.styled';

export interface IRegistry {
  sampleTextProp?: string;
}

const Registry: React.FC<IRegistry> = () => {
  return (
    <RegistryContainer>
      <div>hi</div>
    </RegistryContainer>
  );
};

export default Registry;
