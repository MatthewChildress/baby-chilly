export interface IProfilePic {
  sampleTextProp?: string;
}

const ProfilePic: React.FC<IProfilePic> = ({ sampleTextProp }) => {
  return <>{sampleTextProp}</>;
};

export default ProfilePic;
