import ArticleImage from '../article-image/ArticleImage';
import ArticleTitle from '../article-title/ArticleTitle';
import Date from '../date/Date';
import ProfilePic from '../profile-pic/ProfilePic';

export interface IArticleHeader {
  sampleTextProp?: string;
  title: string;
  image: any;
  date: any;
  author: any;
  slug: string;
}

const ArticleHeader: React.FC<IArticleHeader> = ({
  title,
  image,
  date,
  author,
  slug,
}) => {
  return (
    <>
      <ArticleTitle>{title}</ArticleTitle>
      <div className="hidden md:block md:mb-12">
        <ProfilePic name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <ArticleImage title={title} url={image.url} slug={slug} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <ProfilePic name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
};

export default ArticleHeader;
