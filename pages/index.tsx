import Hero from '../components/common/hero/Hero';
import Section from '../components/common/section/Section';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Specifics from '../components/ui/specifics/Specifics';
import type { NextPageWithLayout } from './page';
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <Section>
        <Specifics />
      </Section>
      <Section />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
