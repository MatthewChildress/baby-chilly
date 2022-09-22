import { BaseTemplateContainer } from './BaseTemplate.styled';

export interface IBaseTemplate {
  sampleTextProp?: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <BaseTemplateContainer>{sampleTextProp}</BaseTemplateContainer>;
};

export default BaseTemplate;
