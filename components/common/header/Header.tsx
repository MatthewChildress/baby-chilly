import NavBar from '../../ui/navbar/NavBar';

export interface IHeader {
  sampleTextProp?: string;
}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="w-full md:bg-transparent flex flex-col md:flex-row-reverse justify-between px-10 items-center py-2">
      <NavBar />
    </header>
  );
};

export default Header;
