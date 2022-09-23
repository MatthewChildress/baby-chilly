import Link from 'next/link';
import Button from '../button/Button';
import { LinksContainer } from './Links.styled';

export interface ILinks {
  sampleTextProp?: string;
}

const Links: React.FC<ILinks> = ({ sampleTextProp }) => {
  return (
    <LinksContainer>
      <li>
        <Link href="#">
          <a>Directions</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>FAQ</a>
        </Link>
      </li>
      <li>
        <Button sampleTextProp={''} />
      </li>
    </LinksContainer>
  );
};

export default Links;
