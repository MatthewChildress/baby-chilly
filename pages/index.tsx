import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
//import Form from '../components/common/form/Form';
import type { NextPageWithLayout } from './page';
const Home: NextPageWithLayout = () => {
  return <></>;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
