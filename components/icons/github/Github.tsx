import { GithubContainer } from './Github.styled';

export interface IGithub {
  sampleTextProp?: string;
}

const Github: React.FC<IGithub> = ({ sampleTextProp }) => {
  return (
    <GithubContainer>
      {sampleTextProp}
      <div>Placeholder</div>
    </GithubContainer>
  );
};

export default Github;
