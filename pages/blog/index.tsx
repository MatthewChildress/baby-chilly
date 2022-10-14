import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import { getAllArticlesForHome } from '../../lib/api';
import type { NextPageWithLayout } from '../page';
const Blog: NextPageWithLayout = () => {
  return <></>;
};

export default Blog;

Blog.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Sidebar />
      {page}
    </PrimaryLayout>
  );
};

export async function getStaticProps({ preview = null }) {
  const allArticles = (await getAllArticlesForHome(preview)) || [];
  return {
    props: { allArticles, preview },
  };
}
