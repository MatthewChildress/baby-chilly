import Button from '../../ui/button/Button';
import { Announcement, HeroContainer } from './Hero.styled';

export interface IHero {
  sampleTextProp?: string;
}

const Hero: React.FC<IHero> = () => {
  return (
    <HeroContainer>
      <Announcement>
        <h1>Oh Holy Shit! We're Having a Kid!</h1>
        <p>Isn't that neat?</p>
      </Announcement>
      <div>
        <p>We should probably put a picture here</p>
      </div>
      <Button />
    </HeroContainer>
  );
};

export default Hero;
