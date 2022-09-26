import { WelcomeContainer } from './Welcome.styled';

export interface IWelcome {
  sampleTextProp?: string;
}

const Welcome: React.FC<IWelcome> = () => {
  return (
    <WelcomeContainer>
      <h2>Join Us</h2>
      <p>Come celebrate the imminent summoning of Ada Childress</p>
      <p>Marvel at how gorgeous Amy is and how radiant she is!</p>
    </WelcomeContainer>
  );
};

export default Welcome;
