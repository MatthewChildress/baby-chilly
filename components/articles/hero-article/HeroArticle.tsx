import Link from 'next/link';
import ArticleImage from '../article-image/ArticleImage';
import Date from '../date/Date';
import ProfilePic from '../profile-pic/ProfilePic';

export interface IHeroArticle {
  sampleTextProp?: string;
  title: string;
  image: {
    url: any;
  };
  dateString: any;
  author: any;
  slug: string;
  date?: any;
  url?: any;
}

const HeroArticle: React.FC<IHeroArticle> = ({
  title,
  image,
  dateString,
  author,
  slug,
}) => {
  return (
    <>
      <section>
        <div className="mb-8 md:mb-16">
          <ArticleImage title={title} url={image.url} slug={slug} />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/articles/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={dateString} />
          </div>
          <div>
            <ProfilePic name={author.name} picture={author.picture} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArticle;
