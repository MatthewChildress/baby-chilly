import Github from '../../icons/github/Github';
import Logo from '../../ui/logo/Logo';

export interface IFooter {
  sampleTextProp?: string;
}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="w-full bg-amber-200 md:bg-transparent flex flex-col md:flex-row justify-between px-10 items-center py-2 gap-4 md:gap-0">
      <Logo />
      <div>
        <span>&copy; 2022 Ada Says So, LLC. All rights reserved.</span>
      </div>
      <Github />
    </footer>
  );
};

export default Footer;
