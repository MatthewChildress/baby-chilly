export interface ISection {
  children?: React.ReactNode;
}

const Section: React.FC<ISection> = ({ children }) => {
  return <section>{children}</section>;
};

export default Section;
