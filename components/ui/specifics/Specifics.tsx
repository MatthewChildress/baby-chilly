import Place from '../place/Place';
import Time from '../time/Time';
import Welcome from '../welcome/Welcome';
import { InteriorContainer, SpecificsContainer } from './Specifics.styled';

export interface ISpecifics {
  sampleTextProp?: string;
}

const Specifics: React.FC<ISpecifics> = () => {
  return (
    <SpecificsContainer>
      <Welcome />
      <InteriorContainer>
        <Time />
        <Place />
      </InteriorContainer>
    </SpecificsContainer>
  );
};

export default Specifics;
