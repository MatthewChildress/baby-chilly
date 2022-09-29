import Link from 'next/link';

export interface IButton {
  sampleTextProp?: string;
}

const Button: React.FC<IButton> = () => {
  return (
    <button>
      <Link href="rsvp">
        <a>RSVP</a>
      </Link>
    </button>
  );
};

export default Button;
