export interface IBaseTemplate {
  sampleTextProp?: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <>{sampleTextProp}</>;
};

export default BaseTemplate;
