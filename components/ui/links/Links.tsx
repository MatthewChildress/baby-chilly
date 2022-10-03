import Link from 'next/link';

export interface ILinks {
  sampleTextProp?: string;
}

const Links: React.FC<ILinks> = () => {
  return (
    <ul className="flex flex-col items-center md:flex-row gap-10">
      <li>
        <Link href="/">
          <a>Placeholder</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Placeholder</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Placeholder</a>
        </Link>
      </li>
    </ul>
  );
};

export default Links;
