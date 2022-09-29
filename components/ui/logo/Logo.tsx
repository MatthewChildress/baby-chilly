import Image from 'next/image';
import Link from 'next/link';
import stork from '../../../public/assets/stork.png';

export interface ILogo {
  sampleTextProp?: string;
}

const Logo: React.FC<ILogo> = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-2">
      <Link href="/">
        <Image
          src={stork}
          width={120}
          height={100}
          layout="intrinsic"
          alt="baby elephant image"
          className="cursor-pointer"
        />
      </Link>
      <h1 className="text-3xl font-bold">Baby Chilly!</h1>
    </div>
  );
};

export default Logo;
