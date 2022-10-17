import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ArticleBody from '../../../components/articles/article-body/ArticleBody';
import ArticleHeader from '../../../components/articles/article-header/ArticleHeader';
import ArticleTitle from '../../../components/articles/article-title/ArticleTitle';
import MoreArticles from '../../../components/articles/more-articles/MoreArticles';
import Container from '../../../components/common/container/Container';
import Header from '../../../components/common/header/Header';
import ArticleLayout from '../../../components/layouts/article/ArticleLayout';
import {
  getAllArticlesWithSlug,
  getArticleAndMoreArticles,
} from '../../../lib/api';
import markdownToHtml from '../../../lib/markdownToHtml';

type IArticle = {
  article: any;
  moreArticles: string[];
};

export default function Article({ article, moreArticles }: IArticle) {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <ArticleLayout>
      <Container>
        <Header />
        {router.isFallback ? (
          <ArticleTitle>Loading. . .</ArticleTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{article.attributes.title} | Baby Chilly</title>
                <meta
                  property="image"
                  content={article.image.data.attributes.url}
                />
              </Head>
              <ArticleHeader
                title={article.attributes.title}
                image={article.attributes.image}
                date={article.attributes.dateString}
                author={article.attributes.author}
                slug={article.attributes.slug}
              />
              <ArticleBody content={article.attributes.content} />
            </article>
            {moreArticles.length > 0 && (
              <MoreArticles articles={moreArticles} />
            )}
          </>
        )}
      </Container>
    </ArticleLayout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const data: any = await getArticleAndMoreArticles(params.slug);
  const content = await markdownToHtml(data?.articles[0]?.content || '');

  return {
    props: {
      article: {
        ...data?.articles[0],
        content,
      },
      moreArticles: data?.moreArticles,
    },
  };
}

export async function getStaticPaths() {
  const allArticles = await getAllArticlesWithSlug();
  return {
    paths:
      allArticles?.map(
        (article: { slug: any }) => `/articles/${article.slug}`
      ) || [],
    fallback: true,
  };
}
