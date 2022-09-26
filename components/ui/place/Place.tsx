import { PlaceContainer } from './Place.styled';

export interface IPlace {
  sampleTextProp?: string;
}

const Place: React.FC<IPlace> = () => {
  return (
    <PlaceContainer>
      <div>
        <div>
          <h3>Place</h3>
          <p>20096 Tall Oaks Drive</p>
          <p>Abingdon Va 24211</p>
        </div>
      </div>
    </PlaceContainer>
  );
};

export default Place;
