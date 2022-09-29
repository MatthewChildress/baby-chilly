import Place from '../place/Place';
import Time from '../time/Time';
import Welcome from '../welcome/Welcome';

export interface ISpecifics {
  sampleTextProp?: string;
}

const Specifics: React.FC<ISpecifics> = () => {
  return (
    <>
      <Welcome />
      <div>
        <Time />
        <Place />
      </div>
    </>
  );
};

export default Specifics;
