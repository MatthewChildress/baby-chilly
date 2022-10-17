/* eslint-disable no-undef */
import Head from 'next/head';
import HeroArticle from '../../components/articles/hero-article/HeroArticle';
import MoreArticles from '../../components/articles/more-articles/MoreArticles';
import Container from '../../components/common/container/Container';
import ArticleLayout from '../../components/layouts/article/ArticleLayout';
import { getAllArticlesForHome } from '../../lib/api';

type IBlog = {
  /*@ts-ignore */
  allArticles: Articles[];
  articles: {
    data: {
      attributes: {
        title: string;
        slug: string;
        dateString: any;
        author: {
          data: {
            attributes: {
              name: string;
              pictures: {
                data: {
                  attributes: {
                    url: string;
                  };
                };
              };
            };
          };
        };
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
    };
  };
};

const Blog = ({ allArticles }: IBlog) => {
  const heroArticle = Object.entries(allArticles)[0][1][0];
  const moreArticles = Object.entries(allArticles)[0][1].slice(1);
  return (
    <>
      <ArticleLayout>
        <Head>
          <title>Baby Chilly | Blog Time</title>
        </Head>
        <Container>
          {heroArticle && (
            <HeroArticle
              title={heroArticle.attributes.title}
              image={heroArticle.attributes.image.data.attributes}
              dateString={heroArticle.attributes.dateString}
              author={heroArticle.attributes.author}
              slug={heroArticle.attributes.slug}
            />
          )}
          {moreArticles.length > 0 && <MoreArticles articles={moreArticles} />}
        </Container>
      </ArticleLayout>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const allArticles = (await getAllArticlesForHome()) || [];
  return {
    props: { allArticles },
  };
}
