export interface INavBar {
  sampleTextProp: string;
}

const NavBar: React.FC<INavBar> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default NavBar;
