export interface IDate {
  sampleTextProp?: string;
}

const Date: React.FC<IDate> = ({ sampleTextProp }) => {
  return <>{sampleTextProp}</>;
};

export default Date;
