import { SectionContainer } from './Section.styled';

export interface ISection {
  children?: React.ReactNode;
}

const Section: React.FC<ISection> = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default Section;
