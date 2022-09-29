import Logo from '../../ui/logo/Logo';
import NavBar from '../../ui/navbar/NavBar';

export interface IHeader {
  sampleTextProp?: string;
}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="w-full bg-amber-200 md:bg-transparent flex flex-col md:flex-row justify-between px-10 items-center py-2">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
