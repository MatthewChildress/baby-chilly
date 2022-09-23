import Hero from '../components/common/hero/Hero';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import type { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
