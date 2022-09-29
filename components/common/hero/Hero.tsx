import Button from '../../ui/button/Button';

export interface IHero {
  sampleTextProp?: string;
}

const Hero: React.FC<IHero> = () => {
  return (
    <section>
      <div>
        <h1>Oh Holy Shit! We arere Having a Kid!</h1>
        <p>Neat, huh?</p>
      </div>
      <div>
        <p>We should probably put a picture here</p>
      </div>
      <Button />
    </section>
  );
};

export default Hero;
