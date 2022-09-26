import Form from '../components/common/form/Form';
import Section from '../components/common/section/Section';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import type { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Section>
        <Form />
      </Section>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
