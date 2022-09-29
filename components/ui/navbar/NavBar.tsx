import { useState } from 'react';
import Links from '../links/Links';

export interface INavBar {
  sampleTextProp?: string;
}

const NavBar: React.FC<INavBar> = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="flex flex-col items-center">
      <div className="md:hidden">
        <button
          className="p-2 text-black rounded-md outline-none focus:border-orange-400 focus:border"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </button>
      </div>
      <div
        className={`w-full flex-1 justify-self-center items-center pb-3 mt-8 md:block md:pb-0 ${
          navbar ? 'block' : 'hidden'
        }`}
      >
        <div className="flex items-center">
          <Links />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
