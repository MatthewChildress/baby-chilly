import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import type { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <div>hi</div>;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
