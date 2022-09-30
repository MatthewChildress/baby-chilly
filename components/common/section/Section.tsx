export interface ISection {
  children?: React.ReactNode;
  sampleTextProp?: string;
}

const Section: React.FC<ISection> = ({ children }) => {
  return <section>{children}</section>;
};

export default Section;
