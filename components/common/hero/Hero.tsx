import { HeroContainer } from './Hero.styled';

export interface IHero {
  sampleTextProp?: string;
}

const Hero: React.FC<IHero> = ({ sampleTextProp }) => {
  return <HeroContainer>{sampleTextProp}hi</HeroContainer>;
};

export default Hero;
