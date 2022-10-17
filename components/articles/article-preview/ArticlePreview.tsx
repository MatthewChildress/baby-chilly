import Link from 'next/link';
import ArticleImage from '../article-image/ArticleImage';
import Date from '../date/Date';

export interface IArticlePreview {
  sampleTextProp?: string;
  title: string;
  image: any;
  dateString: any;
  author: any;
  slug: string;
}

const ArticlePreview: React.FC<IArticlePreview> = ({
  title,
  image,
  dateString,
  author,
  slug,
}) => {
  /*   console.log(typeof author.data.attributes.picture.data.attributes.url); */
  return (
    <>
      <div className="mb-5">
        <ArticleImage
          slug={slug}
          title={title}
          url={image.data.attributes.url}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={dateString} />
      </div>
      {/*       <ProfilePic
        name={author.data.attributes.name}
        picture={author.data.attributes.picture.data.attributes}
      /> */}
    </>
  );
};

export default ArticlePreview;
