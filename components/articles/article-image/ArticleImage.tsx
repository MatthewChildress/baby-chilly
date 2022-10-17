import Image from 'next/image';
import Link from 'next/link';

export interface IArticleImage {
  sampleTextProp?: string;
  title: string;
  image?: {
    url: string;
  };
  url: string;
  slug: string;
}

const ArticleImage: React.FC<IArticleImage> = ({ title, url, slug }) => {
  const imageUrl = `${
    url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
  }${url}`;

  const articleImage = (
    <Image
      width={2000}
      height={1000}
      alt={`Splash Image for ${title}`}
      src={imageUrl}
      className="shadow-sm hover:shadow-md transition-shadow duration-200"
    />
  );
  return (
    <>
      <div className="sm:mx-0">
        {slug ? (
          <Link href={`/posts/${slug}`}>
            <a aria-label={title}>{articleImage}</a>
          </Link>
        ) : (
          articleImage
        )}
      </div>
    </>
  );
};

export default ArticleImage;
