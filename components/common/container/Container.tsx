import React from 'react';

export interface IContainer {
  sampleTextProp?: string;
  children?: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
