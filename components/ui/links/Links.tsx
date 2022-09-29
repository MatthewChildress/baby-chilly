import Link from 'next/link';

export interface ILinks {
  sampleTextProp?: string;
}

const Links: React.FC<ILinks> = () => {
  return (
    <ul className="flex flex-col items-center md:flex-row gap-10">
      <li className="w-max hover:underline hover:decoration-yellow-700 decoration-2 border-b-2 border-solid border-yellow-300 md:border-none">
        <Link href="#">
          <a>Directions</a>
        </Link>
      </li>
      <li className="w-max hover:underline decoration-yellow-800 decoration-2 border-b-2 border-solid border-yellow-300 md:border-none">
        <Link href="#">
          <a>FAQ</a>
        </Link>
      </li>
      <li className="w-max hover:underline decoration-yellow-800 decoration-2 border-b-2 border-solid border-yellow-300 md:border-none">
        <Link href="rsvp">
          <a>RSVP</a>
        </Link>
      </li>
    </ul>
  );
};

export default Links;
