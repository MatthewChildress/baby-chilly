export interface IContainer {
  sampleTextProp?: string;
  children?: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <>{children}</>;
};

export default Container;
